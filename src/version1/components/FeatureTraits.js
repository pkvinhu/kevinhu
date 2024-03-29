import React, { Component } from 'react';
import '../../styles/Version1.css';
import sizeMe from 'react-sizeme';

class FeatureTraits extends Component {
    render() {
        const { width } = this.props.size;
        return (
            <div className='feature' style={width >= 768 ? { top: '60%' } : { top: '42%' }}>
                <div className="container">
                    <div className={width >= 768 ? "row" : "row2"}>
                        <div className="col s4 trait">
                            I AM A <strong><font color="#FEC339">LEARNER</font></strong>. I AM ALWAYS CURIOUS, PROBING AT IDEAS UNTIL I UNDERSTAND IT BOTH BROADLY AND IN ITS MOST MINUTE DETAILS. I BELIEVE IN BOTH THE SIMPLE AND COMPLEX DIMENSIONS.
                        </div>
                        <div className="col s4 trait">
                            I AM A <strong><font color="#FEC339">PROBLEM SOLVER</font></strong>. I AM AMBITIOUS IN SEARCHING FOR SOLUTIONS WITHIN CONTEXT WITHOUT COMPROMISING QUALITY, AND ALWAYS HOLDING ON TO VALUES.
                        </div>
                        <div className="col s4 trait">
                            I AM A <strong><font color="#FEC339">STORYTELLER</font></strong>. I BELIEVE THAT EVERYONE AND EVERYTHING HAS A STORY TO TELL, AND THAT HOW THIS STORY IS TOLD CAN SHAPE PERCEPTION. I ALWAYS AIM TO TELL GOOD STORIES.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default sizeMe()(FeatureTraits);