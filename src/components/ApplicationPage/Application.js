import { useState } from "react";
import "./Application.css";
const Application = () => {
  const [copied, setCopied] = useState(false);
  const email = "jobs@wegive.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true); // Update state to show email text
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };
  return (
    <div className="application">
      <div>
        <h1>About the Position</h1>
        <br></br>
        <p>
          WeGive's Product team is hiring a Full-Stack Software Engineer to
          build and extend our donor platform for the next phase of our
          business. The ideal candidate is passionate and adept in architecture
          and backend development.
        </p>
        <br></br>
        <h4>What you'll do</h4>
        <br></br>
        <ul>
          <li>Work primarily in Vue.JS, Laravel PHP & MySQL</li>
          <li>
            Attend daily Standups, Backlog, Planning and Retrospective meetings
          </li>
          <li>
            Work on development tickets relating to the front-end, functionality
            of the UI, and design
          </li>
          <li>Potentially assist with hotfixes and/or releases</li>
          <li>
            Analyze, design, and develop software through delivering clean,
            maintainable code within a large, complex, and established code base
            to deliver on our product roadmaps
          </li>
          <li>
            Be a valued member of a cross-functional agile team where sharing
            and learning from failures is celebrated and constructive feedback
            is highly encouraged
          </li>
          <li>
            With an open mind, learn and grow your skills by working
            collaboratively with other developers to design new features and
            re-architect existing ones for our web-based SaaS product by
            applying best software development practices and processes
          </li>
        </ul>

        <br></br>
        <h4>What you bring(Required)</h4>
        <br></br>
        <ul>
          <li>
            3+ years of software development experience for back-end
            technologies
          </li>
          <li>
            Bachelor’s Degree in Computer Science or a related field, OR
            comparable work experience
          </li>
          <li>
            Professional back end software development experience in a web based
            distributed software architecture
          </li>
          <li>Experience with PHP</li>
          <li>Experience with MySQL</li>
          <li>
            Ability to work with a diverse team spanning multiple timezones
          </li>
          <li>
            Ability to apply automated testing best practices for web
            application back-end
          </li>
          <li>
            Ability to understand product requirements and translate them into
            technical subtasks
          </li>
          <li>
            Quality engineering skills with solid computer science fundamentals
          </li>
          <li>A collaborative and team positive disposition</li>
        </ul>
        <br />
        <h4>What would be awesome to have (Preferred)</h4>
        <ul>
          <li>Experience with Laravel Horizon</li>
          <li>Experience with Laravel Forge</li>
          <li>Experience with JavaScript, specifically Vue.JS</li>
          <li>Experience with AWS</li>
          <li>SaaS experience</li>
          <li>
            Adjacent experience in the non-profit sector whether professional or
            personal
          </li>
          <li>Functional understanding of Agile methodologies</li>
          <li>
            Experience simultaneously managing multiple web application
            frameworks and/or migrating from one framework to another
          </li>
        </ul>
        <br></br>
        <h3> Why you'll love it here:</h3>
        <ul>
          <li>Market competitive pay</li>
          <li>Equity</li>
          <li>Hybrid workplace with fully remote flexibility for many roles</li>
          <li>
            Supportive time off policies including vacation, sick/mental health
            days, volunteer days, company holidays, and a floating holiday
          </li>
          <li>Respect of you as an individual and respect for your time.</li>
        </ul>
        <br></br>
        <h4>About WeGive</h4>
        <br></br>
        <p>
          WeGive is a private company that helps nonprofit organizations
          maximize their impact through a suite of world-class, online
          fundraising tools to accelerate social impact around the world. Based
          in San Diego, Santa Monica, and Malibu CA, trusted by organizations of
          all sizes, from the fastest-growing nonprofits to some of the world's
          largest social organizations, nonprofits use WeGive's platform to
          raise money, engage their communities, and advance their missions.
        </p>
        <div className="button">
          {!copied ? (
            <button onClick={copyToClipboard}>Apply now &rarr;</button>
          ) : (
            <div className="copiedToClipboard">
              <span>Email copied to clipboard</span>
              <br></br>
              <span>Please mail us your resume</span>
              <br></br>
              <span>All the best!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Application;
