import React, {Component} from 'react'
import './register.css'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import Location from './location'
import WOW from 'wowjs'


class Register extends Component{
    componentDidMount(){
        const wow = new WOW.WOW()
        wow.init()
    }
    handlesubmit= (e)=>{
        e.preventDefault()
    }
    render(){
        return (
            <div className = 'regbody'> 
            <Navbar/>
           <div className="register col-lg-6 col-sm-12 col-lg-offset3 wow flipInY">
              <h1>Register A Service</h1>
              <form onSubmit = {this.handlesubmit}>
                <input className = 'userinfo' type="text" name="username" placeholder=" Username" required="required" />
                <input className = 'userinfo' type="password" name="password" placeholder="Password" required="required" />
                <input className = 'userinfo' type="email" name="email" placeholder="email" required="required" />
                <select name="services" required>
                    <option name="services" value="services">Please Choose a service</option>
                    <option name="Photographer" value="Photographer">Photographer</option>
                    <option name="Fashion Designer" value="Fashion Designer">Fashion Designer</option>
                    <option name="Usher" value="Usher">Ushers</option>
                    <option name="Interior Decorator" value="Interior Decorator">Interior Decorator</option>
                    <option name="Make-up artist" value="Make-up artist">Make-up artist</option>
                    <option name="Baker" value="Baker">Bakers</option>
                    <option name="Graphic Designers" value="Graphic Designer">Graphic Designer</option>
                    <option name="Videographer" value="Videographer">Videographer</option>
                    <option name="Disc Jockey" value="DJ">Disc Jockey</option>                                            
                    <option name="Master of Ceremony" value="MC">Master of Ceremony</option>
                    <option name="Live Band" value="Live Band">Live Band</option>
                    <option name="Halls" value="halls">Halls</option>  
                    <option name="Caterers" value="Caterers">Caterers</option>
                    <option name="Rentals" value="Rentals">Rentals</option>
                    <option name="Online Stores" value="Online stores"> Online stores</option>
                </select>
                <Location/>
                <button type="submit" className="btn pinkbutton btn-block btn-large">Register</button>
              </form>
              <h6>Already have an account?<Link  className= 'signIn' to = '/signin'> <b>Sign in</b></Link></h6>
            </div>
            </div>
 
        )
    }
}

export default Register