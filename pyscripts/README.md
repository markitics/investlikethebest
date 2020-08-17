Export the .srt file from Descript. Set max number of words/characters per card to be very large, like 9999.

Run the following, to convert .srt to json:

For now, I'm just doing this for Episode 181 – similar code could be generalised to save for each new episode.

```python
# in project folder, jump into 'python' shell, then:
from pyscripts.srt_to_json import save_json_transcript
filename = 'public/ep181_subtitles.srt'

result=save_json_transcript(filename)
# .json file is saved in public/ folder, alongside the .srt file

```

In this demo app: Copy the result of 'parts' to services/getTranscript.js, so that transcript (hard-coded) is returned.
In future: Save to database, Cloudflare KV store (or codebase for first few!) with a consistent naming pattern, so getTranscript takes an argument like episode number (181 in this case) or episode guid from Libsyn feed.
