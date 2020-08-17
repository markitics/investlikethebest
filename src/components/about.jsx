import React from "react";
import OneClickButtons from "./oneClickButtons";
const notion_url = process.env.REACT_APP_NOTION_URL;

function About(props) {
  return (
    <div className="about p-4">
      <h1>What's this all about?</h1>
      <p>
        I have built a variety of tools over the years, for educational
        resources, for auto-playing (and editable) transcripts, for podcasters.
        I'm in that small group of ~20 people who show up for the sessions
        before the sessions at Podcast Movement (conference), discussing what
        changes to RSS spec would make most sense, for podcasters.
      </p>
      <p>
        The point of this website is to ask myself, how might I do it if
        starting from scratch today? In particular, how could richer transcripts
        fit into the existing Invest Like the Best workflow?
      </p>
      <h3>This is a live website</h3>
      <p>
        It's my birthday on Tuesday, and I'm taking much of the week offline to
        be with parents and siblings – first such gathering since March! Even
        without hearing form you (Damian/Patrick), I will likely come back and
        make a few tweaks before the end of the week. I'm deploying this v1
        Sunday 16th, but it might (or might not!) look different next weekend –
        depending on what else I have going on 😊
      </p>
      <h3>Setting expectations</h3>
      <p>
        This is a bit of weekend fun for me, as a fan of the podcast. I'm not
        looking for a job, so am surely not the best choice for a key role in
        any new venture. I hope to be of help if I can lend an occasional hand!
        I hack on this sort of thing for fun, and would be glad to be more
        involved with the Invest Like the Best universe!
      </p>
      <h3>Source code for this demo</h3>
      <p>
        Available here:{" "}
        <a
          href="https://github.com/markitics/investlikethebest"
          class="blueLink"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/markitics/investlikethebest
        </a>
      </p>
      <h3>Mind-dump of other easy-wins</h3>
      <p className="centeredP">
        Read more:{" "}
        <a
          className="blueLink"
          href={notion_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Thoughts on hiring an Engineering Lead
        </a>
      </p>
      Or jump to a specific section:
      <ul>
        <li>
          <a
            className="blueLink"
            href="https://www.notion.so/About-Mark-Moriarty-9bb405e5045c46aaaeb66b8151eaa25c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Who is Mark?
          </a>
        </li>
        <li>
          <a
            className="blueLink"
            href="https://www.notion.so/Inspiration-540ad3b9bc96426db1bd40579af6226a"
            target="_blank"
            rel="noopener noreferrer"
          >
            What related projects can we take inspiration from?
          </a>
        </li>
        <li>
          <a
            className="blueLink"
            href="https://www.notion.so/ILTB-Tech-ideas-0bc6761fa2da46958297d040772bb780"
            target="_blank"
            rel="noopener noreferrer"
          >
            Some tech projects worth considering
          </a>
        </li>
      </ul>
      <h3>Chapter marks in mp3 file</h3>
      <OneClickButtons />
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
