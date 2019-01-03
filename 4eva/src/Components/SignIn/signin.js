import React, {Component} from 'react'
import './signin.css'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import WOW from 'wowjs'

class SignIn extends Component{
    componentDidMount(){
        const wow = new WOW.WOW()
        wow.init()
    }

    render(){
        return (
            <div className = 'signInbody'>
                <Navbar/>
                <div className="login col-lg-6 col-sm-12 col-lg-offset3 wow flipInX">
                <h1>Sign in</h1>
                <form method="post">
                    <input className = 'userinfo' type="text" name="username" placeholder="Username" required="required" />
                    <input className = 'userinfo' type="password" name="password" placeholder="Password" required="required" />
                    <button className = 'userinfo btn pinkbutton btn-block btn-large' type="submit"> <Link to  = '/dashboard'>Sign in</Link></button>
                </form>
                <h6>Don't have an account? <b> <Link to  = '/register'>Sign up</Link> </b></h6>
                </div>
            </div>
 
        )
    }
}

export default SignIn