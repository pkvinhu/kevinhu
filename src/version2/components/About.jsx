import React from "react";

const About = () => {
  return (
    <div className="about">
      <section>
        Kevin (they/he) is a nonbinary writer, software engineer, and dad.
      </section>
      <br />
      <section>
        They have written for publications such as{" "}
        <a className="paragraphLink" href="https://www.inheritancemag.com/">
          Inheritance Magazine
        </a>
        ,{" "}
        <a className="paragraphLink" href="https://aaww.org/the-margins/">
          The Margins (AAWW)
        </a>
        ,{" "}
        <a className="paragraphLink" href="https://www.greatriverreview.com/">
          the Great River Review
        </a>
        , amongst others. All of their writing can be found in the{" "}
        <a className="paragraphLink" href="/#/writing">
          here
        </a>
        .
      </section>
      <br />
      <section>
        Most recently, they worked at{" "}
        <a className="paragraphLink" href="https://livefeather.com">
          Feather
        </a>
        , a furniture rental company with the mission to keep furniture waste
        out of landfills towards realizing a more circular economy. They were a
        Software Engineer on the Experience Pod, working across the stack, where
        they most notably shipped features on the consumer website, repurposed
        the subscription plans system, and rebuilt a dynamic subscription
        leasing system.
      </section>
      <br />
      <section>
        Previous to this, they were at{" "}
        <a className="paragraphLink" href="https://www.liveperson.com/">
          LivePerson
        </a>
        , a conversational commerce platform, where they worked on both the
        Implementations Team and the Advanced Analytics Team as a (Fullstack)
        Software Engineer.
      </section>
      <br />
      <section>They are currently searching for a new opportunity.</section>
    </div>
  );
};

export default About;
