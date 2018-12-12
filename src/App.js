import React, { Component } from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Nav/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import './App.css';


class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path = '/' component={Dashboard}/>
            <Route path = '/about' component={About}/>
            <Route path = '/projects' component={Projects}/>
          </Switch>
          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
