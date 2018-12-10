import React from 'react'
import Film from '../../Images/filmReel.jpg'
import Mask from '../../Images/clown.png'
import Gavel from '../../Images/man-with-a-gavel.jpg'

const reelStyle={
    width: '333px',
    height: '146px',
  overflow:'hidden'
}
const judgeStyle={
    width: '331px',
    height: '160px',
  overflow:'hidden',
  paddingLeft:'19px'
}
const clownStyle={
    width: '306px',
    height: '146px',
  overflow:'hidden',
  paddingTop: '10px',
  paddingLeft: '23px'
}

const divStyle={
    width:'332px',
    height: '332px'
}

const Projects = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 l6">
                    <div style={divStyle} className="card">
                        <div className="card-image">
                            <img style={reelStyle} src={Film} alt={"film reel"}/>                            
                        </div>
                        <div className="card-content">
                            <span className="card-title"><b>IMDBU</b></span>
                            <p>A website that allows you to connect with other local film students</p>
                        </div>
                        <div className="card-action">
                            <a href="https://imdbu.herokuapp.com/">Check it out</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 l6">
                    <div style={divStyle} className="card">
                        <div className="card-image">
                            <img style={clownStyle} src={Mask} alt={"Clown face"} />                    
                        </div>
                        <div className="card-content">
                            <span className="card-title"><b>Funny Guy</b></span>
                            <p>A game where you compete with friends and see who is funnier</p>
                        </div>
                        <div className="card-action">
                            <a href="https://funny-guy.herokuapp.com/">Check it out</a>
                        </div>
                    </div>
                </div>
            </div>
             <div className="row">
                
                <div className="col s12 l6 push-l3">
                    <div style={divStyle} className="card">
                        <div className="card-image">
                            <img style={judgeStyle} src={Gavel} alt={"Man on a gavel"} />                    
                        </div>
                        <div className="card-content">
                            <span className="card-title"><b>Rate my Judge</b></span>
                            <p>An app to find and rate your local judges</p>
                        </div>
                        <div className="card-action">
                            <a href="https://recklesskidjo3.github.io/nwProjectFinal/#">Check it out</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
    )
}

export default Projects