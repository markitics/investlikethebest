# Option 1:
# transcript = {
#     "episode_num": 181,
#     "words": [
#         {"start_hhmmss": "00:00:34,160",
#         "end_hhmmss": "00:00:49,480",
#         "start_secs": 34.16,
#         "end_secs": 49.48,
#         "speaker_num": 1,
#         "speaker_name": "Patrick",
#         "text": "My guest this week is Charlie Songhurst the former head of strategy at Microsoft, and a prolific investor having personally invested in nearly 500 companies through his career."
#         "starts_new_paragraph": "true",
#         "card_num": 1
#         },
#         { "next sentence..."},
#         { "next sentence..."},
#     ],
#     "sections": [
#         {"title": "Founder-market fit, through the lens of \"Power, Money, Fame\"",
#         "start_hhmmss": "00:01:15",
#         "start_secs": 75
#         }
#     ]}

# Option 2: conversation and section titles in one array

# transcript = {
#     "episode_num": 181,
#     "parts": [
#         {"kind": "spoken", // or "section_title" or "comment" or "highlight"
#         "start_hhmmss": "00:00:34,160",
#         "end_hhmmss": "00:00:49,480",
#         "start_secs": 34.16,
#         "end_secs": 49.48,
#         "speaker_num": 1,
#         "speaker_name": "Patrick",
#         "text": "My guest this week is Charlie Songhurst the former head of strategy at Microsoft, and a prolific investor having personally invested in nearly 500 companies through his career."
#         "starts_new_paragraph": "true",
#         "card_num": 1
#         },
#         {"next spoken sentence or section title"},
#         {"next spoken sentence or section title"},
#     ]
# }
# 
# Let's go with Option 2 - return a long array of "parts"

import os
import json

def hhmmss_to_secs(hhmmss):
    """ Takes input like '00:14:10,345' or '00:12:34' or '01:23:45.6'.
        Returns float output to 3 decimal places, like 75.0 or 75.6
    """
    hhmmss = hhmmss.replace(',', '.') # convert decimal separator
    hh, mm, ss = map(float, hhmmss.split(':'))
    return round(ss + mm*60 + hh*60*60, 3)

def import_srt(filename):
    """
        Return a json object, based on input .srt filename.

        Assume .srt input file is in the following format:
        1
        00:00:34,160 --> 00:00:49,480
        [Episode 181]
        
        2
        00:00:49,480 --> 00:00:57,730
        Patrick: My guest this week is Charlie Songhurst the former head of strategy at Microsoft, and a prolific investor having personally invested in nearly 500 companies through his career.
        
        3
        00:00:58,230 --> 00:01:00,130
        I met Charlie at an event hosted in New York.
    """
    current_dir = os.getcwd()
    filename_with_path = "%s/%s" % (current_dir, filename)
    with open(filename_with_path, 'r') as srtfile:
        SPEAKER_1_NAME = "Patrick"
        SPEAKER_2_NAME = "Charlie"
        speaker_num, speaker_name = 1, SPEAKER_1_NAME
        line_num = 1
        parts = []
        for line in srtfile:
            if line.endswith("\n"):
                line = line[:-1]
            if line_num % 4 == 1:
                # it's a card number
                part = {} # reset for the next object
            elif line_num % 4 == 2:
                start_hhmmss = line.split(' ', 1)[0].replace(',','.')
                end_hhmmss = line.split(' --> ',1)[1].replace(',','.')
                part["start_secs"] = hhmmss_to_secs(start_hhmmss)
                part["end_secs"] = hhmmss_to_secs(end_hhmmss)
                # Now remove decimal point for seconds, for human-friendly labels
                part["start_hhmmss"] = start_hhmmss.split('.')[0].split(',')[0]
                part["end_hhmmss"]  = end_hhmmss.split('.')[0].split(',')[0]
            elif line_num % 4 == 3:
                if line.startswith('['): #  and line.endswith(']'):
                    part["kind"] = "section_title"
                    part["text"] = line[1:-1] # remove opening [, and maybe the trailing ]
                    # originally had line[1:-1], but was truncating last char when it shouldn't
                else:
                    part["kind"] = "spoken"
                    if line.startswith("%s: "% SPEAKER_1_NAME) or line.startswith("%s [" % SPEAKER_1_NAME):
                        line = line.split(": ", 1)[1]
                        speaker_num = 1
                        speaker_name = SPEAKER_1_NAME
                        part["starts_new_paragraph"] = "true"
                    elif line.startswith("%s: "% SPEAKER_2_NAME) or line.startswith("%s [" % SPEAKER_2_NAME):
                        line = line.split(": ", 1)[1]
                        speaker_num = 2
                        speaker_name = SPEAKER_2_NAME
                        part["starts_new_paragraph"] = "true"
                    else:
                        part["starts_new_paragraph"] = "false"
                        pass # leave speaker name unchanged
                    part["speaker_num"] = speaker_num
                    part["speaker_name"] = speaker_name
                    part["text"] = line
                parts.append(part)
                # print(part)
            if line_num % 4 == 0 and line:
                print("Error, we have content (%s) on line number %s" % (line, line_num))
            line_num += 1 
    return parts

def save_json_transcript(input_srt_file):
    print("In save_json_transcript")
    print(" ")
    ouptput_filename = input_srt_file.replace('.srt', '.json')
    list_of_parts = import_srt(input_srt_file)
    js = {"parts": list_of_parts}
    with open(ouptput_filename, 'w') as outfile:
        # json.dump(js, outfile)
        myjson_string = json.dumps(js, ensure_ascii=False)
        print(myjson_string)
        outfile.write(myjson_string)

        
