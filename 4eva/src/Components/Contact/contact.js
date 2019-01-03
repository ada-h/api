import React, {Component} from 'react'
import './contact.css'
import Navbar from '../Navbar/navbar'
import WOW from 'wowjs'

class Contact extends Component{
    componentDidMount(){
        const wow = new WOW.WOW()
        wow.init()
    }

    render(){
        return (
            <div className = 'contactBody'>
                <Navbar/>
                <div className="contact col-lg-6 col-sm-12 col-lg-offset3 wow rubberBand">
                <h1>We like to hear from you</h1>
                <form method="post">
                    <input  className = 'userinfo' type="text" name="name" placeholder="Full Name" required />
                    <input className = 'userinfo' type="email" name="email" placeholder="email" required />
                    <textarea name="message" placeholder="Message"/>
                    <button type="submit" className="btn pinkbutton btn-block btn-large">Send</button>
                </form>
                </div>
            </div>
 
        )
    }
}

export default Contact