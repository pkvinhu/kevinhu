import React, { Component } from 'react';
import '../../styles/Version1.css';

const ed = [
    { img: "https://religionnews.com/wp-content/uploads/2018/04/webRNS-Wheaton-College-041718.jpg",
      name: "Wheaton College" },
    { img: "https://cdn-images-1.medium.com/max/1067/1*i0rG0owbE0lDeD0dsIaw4Q.jpeg",
      name: "Fullstack Academy"},
    { img: "https://www.incimages.com/uploaded_files/image/970x450/getty_598063032_349381.jpg",
      name: "Self-Learning"}
]

class Education extends Component {
    state = {
        index: 0,  
    }
    
    changeSlide = () => {
        let { index } = this.state;
        console.log(index)
            if(index === ed.length-1){
              this.setState({index: 0 });
            } else if(index <= ed.length){
              this.setState({ index: index+=1 })
            }
    }

    componentDidMount() {
        setInterval(()=> {this.changeSlide()}, 6000)
    }
  
    render() {
      const { index } = this.state;
      return (
          <div className="section education scrollspy" id="education">
            <p>Sometime in college, I decided that I no longer believed that school was the sum of our education.
               I have been privileged enough with the resources to gain an education - albeit with mounting debt - 
               but I do believe that life has taught me far more valuable lessons. 
               During my post-undergraduate life, I have consumed and digested stacks and stacks of books that informs how I live and work.
               Wheaton and Fullstack both contributed to the totality of what I know but is not the totality.
            </p>
            {ed.map((each, i) => {
            return (
            <div className="slide">
                <img
                className= {index === i ? "current1" : "image"}
                src={each.img}
                alt={each.name}
                />
                <div className={index === i ? "current2" : "descript"}>{each.name}</div>
            </div>
            )})}
        </div>
      );
    }
}

export default Education;