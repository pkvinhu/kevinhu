import React from "react";

const About = () => {
  return (
    <div className="about">
      <section>
        Hi, my name is Kevin. I use <strong>they</strong> and{" "}
        <strong>he</strong> pronouns. I am a nonbinary writer, software
        engineer, and dad.
      </section>
      <br />
      <section>
        I have written for publications such as{" "}
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
        , amongst others. All of my writing can be found{" "}
        <a className="paragraphLink" href="/#/writing">
          here
        </a>
        .
      </section>
      <br />
      <section>
        I am an incoming Software Engineer at{" "}
        <a className="paragraphLink" href="https://www.tempus.com/">
          Tempus Labs
        </a>
        {" "}– a precision medicine data platform focused primarily on oncology,
        neurology, and infectious disease.
      </section>
      <br />
      <section>
        Previously, I have worked as a Software Engineer at{" "}
        <a className="paragraphLink" href="https://livefeather.com">
          Feather
        </a>
        {" "}– a furniture rental company with the mission to keep furniture waste
        out of landfills towards realizing a more circular economy – and at{" "}
        <a className="paragraphLink" href="https://www.liveperson.com/">
          LivePerson
        </a>
        , a conversational commerce platform.
      </section>
      <br />
      <section>
        A more complete overview of my work history can be found{" "}
        <a className="paragraphLink" href="/#/resume">
          here
        </a>
        .
      </section>
    </div>
  );
};

export default About;
