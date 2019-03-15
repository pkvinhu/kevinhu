import React, { Component } from 'react';
import '../App.css';
import sizeMe from 'react-sizeme';

const tech = {
    Proficient: { 
                stack: [ "Javascript (ES5, ES6, JSX)", "HTML5", "React", "Redux", "Material Design", "Express", "Node.js", "PostgreSQL", "Sequelize", "Git", "Github", "NPM", "JSON", "AJAX", "RESTful API" ],
                logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
                        "https://png.pngtree.com/svg/20170719/react_1353128.png",
                        "https://cdn-images-1.medium.com/max/614/1*SRL22ADht1NU4LXUeU4YVg.png",
                        "https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F26cf1e10-8c6a-11e8-9fbe-bf2bef5835c0.png&height=480",
                        "https://miro.medium.com/max/730/1*d2zLEjERsrs1Rzk_95QU9A.png",
                        "https://d1.awsstatic.com/rdsImages/postgresql_logo.6de4615badd99412268bc6aa8fc958a0f403dd41.png",
                        "http://docs.sequelizejs.com/manual/asset/logo-small.png",
                        "https://www.clipartmax.com/png/middle/218-2181371_logo-git-git-icon.png",
                        "http://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png",
                        "https://eg2.gallerycdn.vsassets.io/extensions/eg2/vscode-npm-script/0.3.5/1530888240980/Microsoft.VisualStudio.Services.Icons.Default",
                        ]
                },
    Intermediate: {
                    stack: [ "Agile/Scrum", "CSS3", "Heroku", "Webpack", "Babel", "Mocha", "Chai", "Supertest", "Google Apps Script", "Google App Maker" ],
                    logos: [ "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
                            "http://assets.stickpng.com/thumbs/58480873cef1014c0b5e48ea.png",
                            "https://cdn-images-1.medium.com/max/1600/1*gdoQ1_5OID90wf1eLTFvWw.png",
                            "https://cdn-images-1.medium.com/max/2000/1*XmHUL5DeySv_dGmvbPqdDQ.png",
                            "https://cdn-images-1.medium.com/max/1600/1*BmORsbtFaWw0lyyfMtYd0Q.png",
                            "https://www.benlcollins.com/wp-content/uploads/2017/01/apps_script_log.png",
                            "https://getdrip.s3.amazonaws.com/uploads/form_images/306571048/side_1d6770a7a55f4ffa2f3ff4f68e75dddc.png" 
                           ]
                },
    Beginner: { 
                stack: [ "Enzyme", "Jest", "SQL", "Responsive Design", "Bootstrap", "SASS", "Google BigQuery", "Google Cloud", "Python"],
                logos: [ "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/landscape/jestlogo.png",
                        "http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png",
                        "https://avatars2.githubusercontent.com/u/317889?s=200&v=4",
                        "https://cdn-images-1.medium.com/max/541/1*A2GhICVux__ox2jcfGXfrg.png",
                        "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/apple-icon.png",
                        "https://www.python.org/static/opengraph-icon-200x200.png"
                       ]
            }
}

class Technologies extends Component {

    state = {
        current: ''
    }

    handleClick = (evt) => {
        const { width } = this.props.size;
        var elements = document.querySelectorAll(".skills");
        for(let i = 0; i < elements.length; i++){
            if(elements[i].innerHTML == evt.target.innerHTML) {
                if(width >= 768){
                    elements[i].classList.add("grow2")
                }
                else if(width < 768){
                    elements[i].classList.add("grow")
                }
            }
            else {
                elements[i].className = "skills";
            }
        }
        this.setState({ current: [evt.target.innerHTML]})
        if(width >= 768){
            var textbox = document.getElementById("textbox")
                var techbox = document.getElementById("techbox")
                textbox.style.width = "20%";
                techbox.style.width = "80%";
        }
    }

    render() {
        const { handleClick } = this;
        const { current } = this.state;
        return (
            <div className='tech section scrollspy' id='tech'>
                <div className="textbox" id="textbox">
                    <div className="innerTextbox">
                        <h3 onClick={handleClick} className="skills">Proficient</h3>
                        <h3 onClick={handleClick} className="skills">Intermediate</h3>
                        <h3 onClick={handleClick} className="skills">Beginner</h3>      
                    </div>
                </div>
                <div className="techbox" id="techbox">
                    {current ? (
                    <div className="techList">
                        <ul>
                            {tech[current].stack.map((each, i) => (
                                <li key ={i}>{each}</li>
                            ))}
                        </ul>
                    <hr/>
                    <div className="logoContainer">
                    {tech[current].logos.map((each, i) => {
                        return(
                            <img 
                                key={i}
                                alt=""
                                className="logo"
                                src={each}
                                />
                        )
                    })}
                    </div>
                    </div>) :
                (<h1 className="innerTextbox"><strong>Want to know what <font color="#034">technologies</font> I use?</strong></h1>)
                }
                </div>
            </div>
        )
    }
}

export default sizeMe()(Technologies);