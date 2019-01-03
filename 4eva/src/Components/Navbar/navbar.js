import React, {Component} from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import Logo from './logo'

class Navbar extends Component{
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Logo/>
        <div className="collapse middle navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink to ='' className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ='/register' className="nav-link">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ='/heartsandflowers' className="nav-link">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ='' className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ='/contact' className="nav-link">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = '/signin' className="nav-link">Sign In</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      );
    }
  
}
export default Navbar