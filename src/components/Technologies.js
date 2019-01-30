import React, { Component } from 'react';
import '../App.css';
// import { Typography } from '@material-ui/core';


class Technologies extends Component {

    state = {
        current: ''
    }

    handleClick = (evt) => {
        var elements = document.querySelectorAll(".skills");
        for(let i = 0; i < elements.length; i++){
            elements[i].innerHTML == evt.target.innerHTML ? 
            elements[i].classList.add("grow") : 
            elements[i].className = "skills"
        }
        this.setState({ current: [evt.target.innerHTML]})
    }

    render() {
        const { handleClick } = this;
        const { current } = this.state;
        const tech = {
                        Proficient: { 
                                    stack: [ "Javascript (ES5, ES6, JSX)", "HTML5", "React", "Redux", "Material Design", "Express", "Node.js", "PostgreSQL", "Sequelize", "Git", "Github", "NPM", "JSON", "AJAX", "RESTful API" ],
                                    logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
                                            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
                                            "https://onextrapixel.com/wp-content/uploads/2016/04/reactjs-thumb.jpg",
                                            "https://cdn-images-1.medium.com/max/614/1*SRL22ADht1NU4LXUeU4YVg.png",
                                            "data:image/png;base64,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",
                                            "https://miro.medium.com/max/730/1*d2zLEjERsrs1Rzk_95QU9A.png",
                                            "https://d1.awsstatic.com/rdsImages/postgresql_logo.6de4615badd99412268bc6aa8fc958a0f403dd41.png",
                                            "http://docs.sequelizejs.com/manual/asset/logo-small.png",
                                            "https://cdn-images-1.medium.com/max/1366/1*qwFrTMnFkcd3U9rFKwwacw.png",
                                            "https://eg2.gallerycdn.vsassets.io/extensions/eg2/vscode-npm-script/0.3.5/1530888240980/Microsoft.VisualStudio.Services.Icons.Default",
                                            ]
                                    },
                        Intermediate: {
                                        stack: [ "Agile/Scrum", "CSS3", "Heroku", "Webpack", "Babel", "Mocha", "Chai", "Supertest", "Google Sheets Script", "Google App Maker" ],
                                        logos: [ "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
                                                "https://miro.medium.com/max/768/1*w2RAR48UbSAYv-6y_V-cdA.png",
                                                "https://cdn-images-1.medium.com/max/1600/1*gdoQ1_5OID90wf1eLTFvWw.png",
                                                "https://cdn-images-1.medium.com/max/1200/1*43_9024fQOfFJTWQZPiASw.jpeg",
                                                "https://cdn-images-1.medium.com/max/1600/1*BmORsbtFaWw0lyyfMtYd0Q.png",
                                                "https://s3.amazonaws.com/kinlane-productions/google-sheets/google-sheets-icon.jpg",
                                                "https://www.theinquirer.net/w-images/c91d76c8-1124-4c30-95f6-d32d81b3bb1b/2/455275googleappmaker-580x358.jpg" 
                                               ]
                                    },
                        Beginner: { 
                                    stack: [ "Enzyme", "Jest", "SQL", "Responsive Design", "Bootstrap", "SASS", "Google BigQuery", "Google Cloud", "Python"],
                                    logos: [ "https://cdn-images-1.medium.com/max/1600/1*TM2PUy1FaxdKIf8h2WVKug.png",
                                            "https://getbootstrap.com/docs/4.2/assets/brand/bootstrap-social.png",
                                            "https://avatars2.githubusercontent.com/u/317889?s=200&v=4",
                                            "https://cdn-images-1.medium.com/max/440/0*4dorQigbt7af0Fjm.png",
                                            "https://assets.pcmag.com/media/images/514343-google-cloud-platform-logo.jpg?width=333&height=245",
                                            "https://www.python.org/static/opengraph-icon-200x200.png"
                                           ]
                                }
                    }
        return (
            <div className='tech section' id='tech'>
                <div className="textbox">
                    <div >
                        <h3 onClick={handleClick} className="skills">Proficient</h3>
                        <h3 onClick={handleClick} className="skills">Intermediate</h3>
                        <h3 onClick={handleClick} className="skills">Beginner</h3>      
                    </div>
                </div>
                <div className="techbox">
                    {current ? (
                    <div><ul>
                        {tech[current].stack.map(each => (
                            <li>{each}</li>
                        ))}
                    </ul>
                    <hr/>
                    <div className="logoContainer">
                    {tech[current].logos.map(each => {
                        return(
                            <img 
                                alt=""
                                className="logo"
                                src={each}
                                />
                        )
                    })}
                    </div>
                    </div>) :
                (<h1><strong>Want to know what technologies I use?</strong></h1>)
                }
                </div>
            </div>
        )
    }
}

export default Technologies;