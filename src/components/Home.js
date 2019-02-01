import React, { Component } from 'react';
import '../App.css';
import { Button } from '@material-ui/core';
import sizeMe from 'react-sizeme';


class Home extends Component {

    state = {
        transform: false,
        current: ''
    }

    handleClick = (evt) => {
        console.log(evt.target.innerHTML);
        if(evt.target.name === "transform") {
            this.setState({ transform: true })
        }
        else {
            this.setState({ current: [evt.target.innerHTML] })
        }
        console.log(this.state.current);
    }

    componentDidMount(){
        const { width } = this.props.size;
        if(width <= 1024) {
            this.setState({ 
                current: "Strengths"
            })
        }
    }

    render() {
        const { transform, current } = this.state;
        const { handleClick } = this;
        const qualities = { "Strengths": ["Problem Solving", "Learner", "Connectedness", "Relational", "Public Speaking", "Work Ethic"],
                            "Passions": ["People", "Story-telling", "Data", "Writing", "Social Equality/Equity", "Asian American Community"], 
                            "Books": [ "East of Eden - John Steinbeck", "Gilead - Marilynne Robinson", "The Brothers K - David James Duncan", "A Tale for the Time Being - Ruth Ozeki", "Homegoing - Yaa Gyasi"]}
        const { width } = this.props.size;
        if(width <= 736) {
            return (
                <div></div>
            )} else {
        return (
            <div className='home section' id='home'>
                    <div className="gridContainer">
                            {current && (<div className="tile">
                                <h3>{current}</h3>
                                <hr />
                                <ul>
                                    {current ? qualities[current].map(each => (
                                        <li>{each}</li>
                                    )) :
                                    (<div></div>)
                                    }
                                </ul>
                            </div>)}
                    </div>
                    <div className={transform ? "transform bio" : "bio"}>
                    {transform && 
                        (<div className="insideQualities">
                            <Button name="strengths" onClick={handleClick}>Strengths</Button>
                            <Button name="passions" onClick={handleClick}>Passions</Button>
                            <Button name="books" onClick={handleClick}>Books</Button>
                        </div>)
                    }
                    <img
                        alt=""
                        name="transform"
                        className={transform ? "profilePic transform2" : "profilePic"}
                        src={require('../assets/kevinhu_photo.png')}
                        onClick={handleClick}
                    />
                    </div>
            </div>
        )
        }
    }
}

export default sizeMe()(Home);