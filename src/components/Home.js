import React, { Component } from 'react';
import '../App.css';
import { Button, Icon } from '@material-ui/core';


class Home extends Component {
    state = {
        transform: false,
        Strengths: false,
        Books: false,
        Passions: false
    }

    handleClick = (evt) => {
        console.log(evt.target.name, evt.target.innerHTML);
        if(evt.target.name === "transform") {
            this.setState({ transform: true })
        }
        else {
            this.setState({ [evt.target.innerHTML]: true })
        }
    }

    render() {
        const { transform, Strengths, Books, Passions } = this.state;
        const { handleClick } = this;
        const qualities = { "Strengths": ["Problem Solving", "Learner", "Connectedness", "Relational", "Public Speaking", "Work Ethic"],
                            "Passions": ["People", "Story-telling", "Data", "Writing", "Social Equality/Equity", "Asian American Community"], 
                            "Favorite Books": [ "East of Eden - John Steinbeck", "Gilead - Marilynne Robinson", "The Brothers K - David James Duncan", "A Tale for the Time Being - Ruth Ozeki", "Homegoing - Yaa Gyasi"]}
        return (
            <div className='home' id='home'>
                    <div className="gridContainer">
                        {Strengths && (
                            <div className="tile">
                                <h3>Strengths</h3>
                                <hr />
                                <ul>
                                    {qualities["Strengths"].map(each => (
                                        <li>{each}</li>
                                    ))}
                                </ul>
                            </div>)
                        }
                        {Passions && (
                            <div className="tile">
                                <h3>Passions</h3>
                                <hr />
                                <ul>
                                    {qualities["Passions"].map(each => (
                                        <li>{each}</li>
                                    ))}
                                </ul>
                            </div>)
                        }
                        {Books && (
                            <div className="tile">
                                <h3>Favorite Books</h3>
                                <hr />
                                <ul>
                                    {qualities["Favorite Books"].map(each => (
                                        <li>{each}</li>
                                    ))}
                                </ul>
                            </div>)
                        }
                    </div>
                    <div className={transform ? "transform bio" : "bio"}>
                    {transform && 
                        (<div className="insideQualities">
                            <Button name="strengths" color="gray" onClick={handleClick}>Strengths</Button>
                            <Button name="passions" onClick={handleClick}>Passions</Button>
                            <Button name="books" onClick={handleClick}>Books</Button>
                        </div>)
                    }
                    <img
                        name="transform"
                        className={transform ? "profilePic transform2" : "profilePic"}
                        src={require('../kevinhu_photo.png')}
                        onClick={handleClick}
                    />
                    
                    </div>
                    <div className={transform ? "qualities transform2" : "qualities"}>
                        {!transform && 
                        (<div><Icon>menu</Icon>
                        <Icon>arrow_forward_ios</Icon></div>)}
                    </div>

            </div>
        )
    }
}

export default Home;