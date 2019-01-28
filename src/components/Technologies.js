import React, { Component } from 'react';
import '../App.css';
import { Typography } from '@material-ui/core';


class Technologies extends Component {
    render() {
        const logos = ["https://miro.medium.com/max/730/1*d2zLEjERsrs1Rzk_95QU9A.png",
                       "https://d1.awsstatic.com/rdsImages/postgresql_logo.6de4615badd99412268bc6aa8fc958a0f403dd41.png",
                       "http://docs.sequelizejs.com/manual/asset/logo-small.png",
                       "https://onextrapixel.com/wp-content/uploads/2016/04/reactjs-thumb.jpg",
                       "https://cdn-images-1.medium.com/max/614/1*SRL22ADht1NU4LXUeU4YVg.png",
                       "https://cdn-images-1.medium.com/max/1600/1*BmORsbtFaWw0lyyfMtYd0Q.png",
                       "https://cdn-images-1.medium.com/max/1366/1*qwFrTMnFkcd3U9rFKwwacw.png",
                       "https://static1.squarespace.com/static/59132a2bff7c505de8a0b25b/59557f346b49982a7b1cf98c/5970bc976f4ca30fe6943f53/1530790224794/g-suite-square-logo.PNG?format=500w",
                       "https://cdn-images-1.medium.com/max/1200/1*43_9024fQOfFJTWQZPiASw.jpeg",
                       "https://getbootstrap.com/docs/4.2/assets/brand/bootstrap-social.png",
                       "https://avatars2.githubusercontent.com/u/317889?s=200&v=4",
                       "https://miro.medium.com/max/918/1*SruahLTSYt6Oo8MKhTMI6w.png"]
        const tech = {
            Proficient: [ "Javascript (ES5, ES6, JSX)", "HTML", "CSS", "React", "Redux", "Material Design", "Express", "Node.js", "PostgreSQL", "Sequelize", "Git", "Github", "npm" ],
            Intermediate: [ "Bootstrap", "Responsive Design", "Heroku", "Webpack", "Mocha", "Chai", "Supertest", "Google Sheets Script", "Google App Maker" ],
            Beginner: [ "Enzyme", "Jest", "SQL", "Google BigQuery", "Google Cloud", "Socket.io", "SASS"]
        }
        return (
            <div className='tech section' id='tech'>
                <div className="logoContainer">
                {logos.map(each => {
                    return(
                        <img 
                            alt=""
                            className="logo"
                            src={each}
                            />
                    )
                })}
                </div>
                <div className="textbox">
                    <div>
                        <h4 className="skills">Proficient</h4>
                        <hr />
                        <ul>
                        {tech.Proficient.map(each => (
                            <li>{each}</li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="skills">Intermediate</h4>
                        <hr />
                        <ul>
                        {tech.Intermediate.map(each => (
                            <li>{each}</li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="skills">Beginner</h4>
                        <hr />
                        <ul>
                        {tech.Beginner.map(each => (
                            <li>{each}</li>
                        ))}
                        </ul>       
                    </div>
                </div>
            </div>
        )
    }
}

export default Technologies;