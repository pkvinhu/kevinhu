import React, { Component } from 'react';
import '../App.css';

  const writing = [
      { name: "Cultivating Appetites",
        link: "https://www.inheritancemag.com/stories/cultivating-appetites",
        image: require("../assets/CA.png") },
      { name: "Engaging Power and Politics in an Immigrant Family",
        link: "https://www.inheritancemag.com/article/engaging-power-and-politics-in-an-immigrant-family",
        image: require("../assets/PowerPolitics.png") },
      { name: "Naming the Violence of Charlottesville",
        link: "https://www.inheritancemag.com/article/naming-the-violence-of-charlottesville",
        image: require("../assets/Charlottesville.png") },
      { name: "Excavating the Trenches of Chinese Memory",
        link: "https://www.inheritancemag.com/stories/excavating-the-trenches-of-chinese-memory",
        image: require("../assets/Excavating.png") },
  ]

class Writing extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className='writing section scrollspy' id='writing'>
                <div className="container">
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
                </div>
            </div>
        )
    }
}

export default Writing;