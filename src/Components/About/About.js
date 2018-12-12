import React from 'react';
import './About.css';


const About = () => {

    return (
        <div className="about">
            <div className="aboutText">
                <h4 className="">I am a full-stack developer living in Chicago. I also am a Realtor at <a href="https://kalerealty.com/" target="_blank" rel="noopener noreferrer">Kale Realty</a>.
                  I really enjoy learning new technologies and trying to solve problems. Something I work on everyday is self improvement,
                  whether its with programming or just life in general. In my spare time I enjoy hanging out with friends, playing video games, and being active outdoors with my dog.</h4>
                <ul>
                    <li className="plinks"><a href="https://github.com/Qhub90" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                    <li className="plinks"><a href="https://www.linkedin.com/in/quentin-turner-605a67155/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li className="plinks"><a id="myEmail" href="mailto:qturner1090@gmail.com"><i className="far fa-envelope"></i></a></li>
                </ul>            
            </div>            
        </div>
    )
}

export default About