import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'



const Navbar = () =>{    
      return (
         <header>
        <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Quentin Turner</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="https://github.com/Qhub90"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/quentin-turner-605a67155/"><i className="fab fa-linkedin"></i></a> </li>
                <li><a value="qturner1090@gmail.com"><i className="far fa-envelope"></i></a></li>             
               </ul>
            </div>
        </nav>
    </header>
    )
}


export default Navbar