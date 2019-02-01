import React, { Component, Fragment } from 'react';
import '../App.css';

class About extends Component {
    state = {
        bg: false
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({ bg: !this.state.bg})
        }, 10000)
    }

    render() {
        const { bg } = this.state;
        return (
            <Fragment className='about section'>
            <div className={!bg ? 'about section aboutBG1' : 'about section aboutBG2'} id='about'>
            <img
                alt=""
                name=""
                className="image"
                src={require('../assets/faphoto3.jpg')}
            />
                <div className='info'><h1><strong>Hi, my name is Kevin.</strong></h1>
                                      I am a Fullstack Software Engineer and Writer based in Brooklyn, New York. 
                                      My story started in Chicago, and is quite long, so I'll try my best not to bore you with the details.
                                      <br /><br />
                                      My vocational journey took me on a whirlwind. On this journey, 
                                      I discovered that I was passionate about connecting communities, doing good, story-telling, and my identity as an Asian American.
                                      <br/><br/>
                                      During this time, I also discovered code and fell in love with how it worked to intersect some of these passions.
                                      So I took a deep dive into Javascript by attending Fullstack Academy's Web Development bootcamp,
                                      and also into the Asian American writing space.
                                      <br /><br />
                                      This will sound cliche, but I promise I am being frank when I say this and not just trying to say what I'm supposed to.
                                      I enjoy problem solving. It was a part of me that code really unlocked. Problem solving excites me. 
                                      Like, when I solve problems, in the technical sense, something about my amygdala triggering and dopamine increasing.
                                      I would like to think though that my exploration in identity and story as a writer humbles me to know that not every problem has a quick solution like coding often might.
                                      <br/><br/>
                                      I am currently searching for engineering roles where I can contribute on an agile oriented team that is built with a DNA of learning and curiosity.
                                      Check out some of my projects below for more insight on what I do.
                                      </div>
            </div>
            </Fragment>
        )
    }
}

export default About;