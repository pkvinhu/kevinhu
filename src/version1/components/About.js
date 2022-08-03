import React, { Component } from 'react';
import '../../styles/Version1.css';

class About extends Component {

    // componentDidMount(){
        
    // }

    render() {
        return (
            <div className='lazy about section' id="about">
            <img
                alt=""
                className="image"
                src={require('../../assets/aboutme_img.jpg')}
            />
                <div className='info'><h1 className="animated bounceInDown delay-1s"><strong>HI, MY NAME IS <font color="#2d5986">KEVIN</font>.</strong></h1>
                                      I am a Writer and Software Engineer based in Brooklyn, New York. 
                                      My story started in Chicago, and is quite long, so I'll try my best not to bore you with the details.
                                      <br /><br />
                                      I have done pastoral work in both Chinese and Filipino immigrant communities in the past;
                                      and am invested in telling stories through my writing, primarily exploring themes of the Chinese diaspora, displacement, memory and oblivion, and faith;
                                      and am a listener, learner, and participant of communities that invest in decolonizing and deconstructing theology with hopes to rebuild.
                                      My writing aesthetic has been creative nonfiction and essays, but I am a storyteller at heart.
                                      <br/><br/>
                                      My journey into Software Engineering began with Fullstack Academy. 
                                      Amongst many things, what I love most about coding is thinking about architecture 
                                      and solving problems with the intent for reusability and accessibility while maintaining optimal efficiency.
                                      I see myself less as "writer" and "engineer" but more as "creative and technical writer". 
                                      Code, like writing, often tells a story, and I love that they intersect in that way.
                                      <br /><br />
                                      I am currently a Solutions Engineer at 
                                      <a 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        href="https://www.liveperson.com/"><font color="#2d5986"> LivePerson </font></a> 
                                      in New York HQ. I believe that software can be used for a more just and equitable world,
                                      and am interested in participating in independent projects that work for both social and environmental justice.
                                      If you have any ideas regarding these spheres, I'd love to talk to you for further ideation -
                                      especially if this includes public data sets that help to mobilize.
                                      <br/><br/>
                                      I am also an avid fiction reader, and although I don't make any money for it, 
                                      I am quite passionate about both written and spoken word, the creation process of stories, and that kind of thing.
                                      If you'd like to chat more in any of these areas, feel free to hit me up.
                                      </div>
            </div>
        )
    }
}

export default About;