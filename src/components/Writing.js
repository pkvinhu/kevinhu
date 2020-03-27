import React, { Component } from "react";
import "../App.css";

const writing = [
  {
    name: "Cultivating Appetites",
    link: "https://www.inheritancemag.com/stories/cultivating-appetites",
    image: require("../assets/CA.png")
  },
  {
    name: "Engaging Power and Politics in an Immigrant Family",
    link:
      "https://www.inheritancemag.com/article/engaging-power-and-politics-in-an-immigrant-family",
    image: require("../assets/PowerPolitics.png")
  },
  {
    name: "Naming the Violence of Charlottesville",
    link:
      "https://www.inheritancemag.com/article/naming-the-violence-of-charlottesville",
    image: require("../assets/Charlottesville.png")
  },
  {
    name: "Excavating the Trenches of Chinese Memory",
    link:
      "https://www.inheritancemag.com/stories/excavating-the-trenches-of-chinese-memory",
    image: require("../assets/Excavating.png")
  },
  {
    name: "Hearing the Ghost of Grandma",
    link: "https://www.inheritancemag.com/stories/hearing-the-ghost-of-grandma",
    image: require("../assets/Ghost.png")
  },
  {
    name: "Tips On Landing a Software Engineering Job Post-Bootcamp",
    link:
      "https://hackernoon.com/tips-on-landing-a-software-engineering-job-post-bootcamp-fac8778e3fc7",
    image: require("../assets/HN_getjob_img.png")
  },
  {
    name: "Severance By Ling Ma: A Book Review",
    link:
      "https://www.inheritancemag.com/article/severance-by-ling-ma-a-book-review",
    image: require("../assets/severance_review.jpg")
  }
];
const sections = {
  books: [
    {
      name: "Severance By Ling Ma: A Book Review",
      link:
        "https://www.inheritancemag.com/article/severance-by-ling-ma-a-book-review",
      image: require("../assets/severance_review.jpg"),
      date: "June 2019"
    }
  ],
  diaspora: [
    {
      name: "Culprits",
      link:
        "https://www.inheritancemag.com/stories/culprits",
      date: "March 2020"
    },
    {
      name: "Engaging Power and Politics in an Immigrant Family",
      link:
        "https://www.inheritancemag.com/article/engaging-power-and-politics-in-an-immigrant-family",
      image: require("../assets/PowerPolitics.png"),
      date: "July 2017"
    },
    {
      name: "Excavating the Trenches of Chinese Memory",
      link:
        "https://www.inheritancemag.com/stories/excavating-the-trenches-of-chinese-memory",
      image: require("../assets/Excavating.png"),
      date: "March 2018"
    },
    {
      name: "Hearing the Ghost of Grandma",
      link:
        "https://www.inheritancemag.com/stories/hearing-the-ghost-of-grandma",
      image: require("../assets/Ghost.png"),
      date: "March 2019"
    }
  ],
  food: [
    {
      name: "Cultivating Appetites: Eating as the Initial Rite of Acceptance",
      link: "https://www.inheritancemag.com/stories/cultivating-appetites",
      image: require("../assets/CA.png"),
      date: "April 2017"
    }
  ],
  race: [
    {
      name:
        "Naming the Violence of Charlottesville: The American Church Must Denounce White Supremacy",
      link:
        "https://www.inheritancemag.com/article/naming-the-violence-of-charlottesville",
      image: require("../assets/Charlottesville.png"),
      date: "August 2017"
    }
  ],
  sustainability: [
    {
      name:
        "Sustainability as a Decolonizing Liturgical Practice (Part 1): Plastic Free July",
      link: "https://www.divergingmag.com/decolonizing-sustainability-part-1/",
      date: "July 2019"
    },
    {
      name:
        "Sustainability as a Decolonizing Liturgical Practice (Part 2), Co-written with Charisse Serrano",
      link: "https://www.divergingmag.com/decolonizing-sustainability-part-2/",
      date: "September 2019"
    }
  ],
  tech: [
    {
      name: "Tips On Landing a Software Engineering Job Post-Bootcamp",
      link:
        "https://hackernoon.com/tips-on-landing-a-software-engineering-job-post-bootcamp-fac8778e3fc7",
      image: require("../assets/HN_getjob_img.png"),
      date: "May 2019"
    }
  ]
};

class Writing extends Component {
  render() {
    return (
      <div className="writing" id="writing">
        <div>
          {Object.keys(sections).map((each, i) => {
            return (
              <div className="panel">
                <div className="section1">
                  <div className="sectionName">{each}</div>
                  <hr style={{ width: "300%" }} />
                </div>
                <ul className="section2">
                  {sections[each].map((article, idx) => {
                    return (
                      <li>
                        <a
                          className="_item"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={article.link}
                        >
                          {article.name},{" "}
                          <strong className="date">{article.date}</strong>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          {/*<div className="container">
                {writing.map((each, i) => {
                        return (
                            <a 
                                target="_blank" 
                                rel="noopener noreferrer"
                                href={each.link}>
                            <div 
                                key={i} 
                                className="card writingTile" 
                                name={each.name}>
                                    <img alt='' src={each.image}/>
                                    <div className="writingContent">{each.name}</div>
                                </div>
                            </a>
                                )
                    
                        })}
                      </div>*/}
        </div>
      </div>
    );
  }
}

export default Writing;
