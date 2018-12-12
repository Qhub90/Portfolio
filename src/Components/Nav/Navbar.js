import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {    
    
     render(){
      return (
        <nav className="zone">
            <ul className="main-nav">
              <li className="logo push"><a href="/">Quentin Turner</a></li>
              <li className=""><a href="/">Home</a></li>
              <li className=""><a href="/about">About</a></li>
              <li className=""><a href="/projects">Projects</a></li>                             
            </ul>

            
        </nav>
        
    )
}
}


export default Navbar