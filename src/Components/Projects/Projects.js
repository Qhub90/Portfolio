import React from 'react'
import './Projects.css'
import Film from '../../Images/filmReel.jpg'
import Mask from '../../Images/clown.png'
import Gavel from '../../Images/man-with-a-gavel.jpg'


const Projects = () => {
    return (
        <div className="grid-wrapper">
        <div className="box zone"><img className="film" src={Film}/></div> 
        <div className="box zone"><img src={Mask}/></div> 
        <div className="box zone"><img src={Gavel}/></div> 
        </div>
    )
}

export default Projects