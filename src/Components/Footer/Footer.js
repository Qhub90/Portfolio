import React from 'react'

const footer ={
    padding:'10px'
}
const ulStyle={
    listStyle:"none",
}

const liStyle={
    display:"inline-block",
    paddingRight:"10px",
    fontSize:"25px"

}
const Footer = () => {
    return (
        
        <footer className="page-footer">
            <div className="container">
                  <p className="grey-text text-lighten-4 center">Photo by Alexander Andrews on Unsplash</p>                
                    {/* <ul className="right">
                    <li><a href="https://github.com/Qhub90"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/quentin-turner-605a67155/"><i className="fab fa-linkedin"></i></a> </li>
                    <li><a value="qturner1090@gmail.com"><i className="far fa-envelope"></i></a></li>
                  </ul>  */}
                 <p className="center">© 2018 Copyright Text</p>
            </div>
          </footer>
    )
}

      export default Footer      