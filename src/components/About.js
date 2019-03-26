import React, { Component } from 'react';
import '../App.css';

class About extends Component {

    // componentDidMount(){
        
    // }

    render() {
        return (
            <div className='lazy about section' id="about">
            <img
                alt=""
                className="image"
                src={require('../assets/faphoto3.jpg')}
            />
                <div className='info'><h1 className="animated bounceInDown delay-1s"><strong>HI, MY NAME IS <font color="#034">KEVIN</font>.</strong></h1>
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
                                      Check out some of my projects for more insight on what I do.
                                      </div>
            </div>
        )
    }
}

export default About;