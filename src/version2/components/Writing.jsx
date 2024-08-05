import React from "react";
import "../../styles/Version2.css";

const writing = [
  {
    name: "Cultivating Appetites",
    publication: "Inheritance Magazine",
    link: "https://www.inheritancemag.com/stories/cultivating-appetites",
    date: "April 2017",
  },
  {
    name: "Engaging Power and Politics in an Immigrant Family",
    publication: "Inheritance Magazine",
    link:
      "https://www.inheritancemag.com/article/engaging-power-and-politics-in-an-immigrant-family",
    date: "July 2017",
  },
  {
    name: "Naming the Violence of Charlottesville",
    publication: "Inheritance Magazine",
    link:
      "https://www.inheritancemag.com/article/naming-the-violence-of-charlottesville",
    date: "August 2017",
  },
  {
    name: "Excavating the Trenches of Chinese Memory",
    publication: "Inheritance Magazine",
    link:
      "https://www.inheritancemag.com/stories/excavating-the-trenches-of-chinese-memory",
    date: "March 2018",
  },
  {
    name: "Hearing the Ghost of Grandma",
    publication: "Inheritance Magazine",
    link: "https://www.inheritancemag.com/stories/hearing-the-ghost-of-grandma",
    date: "March 2019",
  },
  {
    name: "Tips On Landing a Software Engineering Job Post-Bootcamp",
    publication: "Hackernoon",
    link:
      "https://hackernoon.com/tips-on-landing-a-software-engineering-job-post-bootcamp-fac8778e3fc7",
    date: "May 2019",
  },
  {
    name: "Severance By Ling Ma: A Book Review",
    publication: "Inheritance Magazine",
    link:
      "https://www.inheritancemag.com/article/severance-by-ling-ma-a-book-review",
    date: "June 2019",
  },
  {
    name:
      "Sustainability as a Decolonizing Liturgical Practice (Part 1): Plastic Free July",
      publication: "Diverging Magazine",
    link: "https://www.divergingmag.com/decolonizing-sustainability-part-1/",
    date: "July 2019",
  },
  {
    name:
      "Sustainability as a Decolonizing Liturgical Practice (Part 2), Co-written with Charisse Serrano",
      publication: "Diverging Magazine",
    link: "https://www.divergingmag.com/decolonizing-sustainability-part-2/",
    date: "September 2019",
  },
  {
    name: "Culprits",
    publication: "Inheritance Magazine",
    link: "https://www.inheritancemag.com/stories/culprits",
    date: "March 2020",
  },
  {
    name: "A Ritual of Grief in New Waves",
    publication: "The LitPub",
    link:
      "https://www.thelitpub.com/reviews-interviews/a-ritual-of-grief-in-new-waves-by-kevin-nguyen",
    date: "March 2020",
  },
  {
    name:
      "Seeing the Transfer of Exclusion in the 1965 Immigration Act: Asian Americans for Collective Liberation",
      publication: "Asian Americans Writing Workshop, The Margins",
    link:
      "https://aaww.org/seeing-the-transfer-of-exclusion-in-the-1965-immigration-act/",
    date: "October 2020",
  },
  {
    name: "Turnip Cake",
    publication: "Great River Review",
    link: "https://www.greatriverreview.com/issue-68-toc/kevin-hu",
    date: "November 2021",
  },
  {
    name: "Protesters Demand Ceasefire in Gaza and End to Israeli Occupation",
    publication: "South Side Weekly",
    link: "https://southsideweekly.com/protesters-demand-ceasefire-in-gaza-and-end-to-israeli-occupation/",
    date: "October 2023",
  },
  {
    name: "Chinese Americans Protest Planned Brighton Park Tent Camp",
    publication: "South Side Weekly",
    link: "https://southsideweekly.com/chinese-americans-in-protests-against-tent-encampments-in-brighton-park/",
    date: "November 2023",
  },
  {
    name: "Chicago Students Join National Wave of Pro-Palestine University Protests",
    publication: "South Side Weekly",
    link: "https://southsideweekly.com/chicago-students-join-national-wave-of-pro-palestine-university-protests/",
    date: "December 2023",
  },
  {
    name: "U. of C. Police Clear Gaza Encampment",
    publication: "South Side Weekly",
    link: "https://southsideweekly.com/students-occupy-university-of-chicago-campus-and-demand-divestment-from-israel/",
    date: "April 2024",
  },
];

const Writing = () => {
  return (
    <div className="writing">
      <ul>
        {writing.map((article, i) => {
          return (
            <li>
              <a
                className="_item"
                target="_blank"
                rel="noopener noreferrer"
                href={article.link}
              >
                {article.name}, <strong className="pub">{article.publication}</strong>, <strong className="date">{article.date}</strong>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Writing;
