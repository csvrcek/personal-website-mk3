import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

class AboutMe extends Component{
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images
    }
  }

  render () {
    return (
      <div className="viewportCover">
        <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
          <h1 style={{paddingLeft: "10px"}}>About Me</h1>
        </ScrollAnimation>
        <div>
          <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
            <p id="aboutMe">I am a <b>computer science student </b>
            at the <b>University of Michigan - Ann Arbor</b> with a <b>minor in Entrepreneurship</b>. 
            My passions lie in all things <b> iOS and web</b>, but I love all software development as well.
            When I'm not programming I'm either outside enjoying the company of friends, binging some sort of HBO/Netflix show,
            or spending time with my family and our dog. </p>
          </ScrollAnimation>
        </div>

        <div style = {{display: "block", width: "85%", marginLeft:"auto", marginRight:"auto"}} >
          <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
            <Gallery images={this.state.images}/>
          </ScrollAnimation>
        </div>      
      </div>
    )
  }
}

AboutMe.propTypes = {
  images: PropTypes.arrayOf(
      PropTypes.shape({
          src: PropTypes.string.isRequired,
          thumbnail: PropTypes.string.isRequired,
          srcset: PropTypes.array,
          caption: PropTypes.string,
          thumbnailWidth: PropTypes.number.isRequired,
          thumbnailHeight: PropTypes.number.isRequired,
          isSelected: PropTypes.bool
      })
  ).isRequired
};

AboutMe.defaultProps = {
  images: [
    {
      src: require("./Assets/hacking.jpg"),
      thumbnail: require("./Assets/hacking.jpg"),
      thumbnailWidth: 400,
      thumbnailHeight: 536,
      caption: "Working on a personal project at one of Michigan Hackers' hack nights.",
    },
    {
      src: require("./Assets/hoola.jpg"),
      thumbnail: require("./Assets/hoola.jpg"),
      thumbnailWidth: 400,
      thumbnailHeight: 536,
      caption: "I love trying new things... including hoola hooping!",
    },
    {
      src: require("./Assets/kayak.jpg"),
      thumbnail: require("./Assets/kayak.jpg"),
      thumbnailWidth: 400,
      thumbnailHeight: 536,
      caption: "Kayaking on the Huron river.",
    },
    {
      src: require("./Assets/cedar_point.jpg"),
      thumbnail: require("./Assets/cedar_point.jpg"),
      thumbnailWidth: 450,
      thumbnailHeight: 338,
      caption: "Cedar Point with some great people.",
    },
    {
      src: require("./Assets/hackers_exec.jpg"),
      thumbnail: require("./Assets/hackers_exec.jpg"),
      thumbnailWidth: 400,
      thumbnailHeight: 536,
      caption: "The 2018-2019 Michigan Hackers exec board (President: myself, Vice President: Trevor Sanderson, Logistics: Janet Vu).",
    },
    {
      src: require("./Assets/shades.JPG"),
      thumbnail: require("./Assets/shades.JPG"),
      thumbnailWidth: 400,
      thumbnailHeight: 536,
      caption: "Hanging out by one of the beautiful water features of North Campus.",
    },
    {
      src: require("./Assets/log.jpg"),
      thumbnail: require("./Assets/log.jpg"),
      thumbnailWidth: 400,
      thumbnailHeight: 536,
      caption: "It's always fun to explore nature!",
    }
  ]
};


export default AboutMe;