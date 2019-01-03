import React, {Component} from 'react'
import Logo from '../Navbar/logo'
import {Link} from 'react-router-dom'

class SideNav extends Component{
    render(){
        return(
            <div className = 'sidenav'>
                <div className = 'dashboardLogo'>
                    <Logo/>
                </div>
                <div className= 'dashboardLinks'>
                    <Link to = '/dashboard' className = 'dashboardLink'> Dashboard</Link><br/>
                    <Link to ='./profile' className = 'dashboardLink'> Profile</Link><br/>
                    <Link to ='./notification' className = 'dashboardLink'> Notifications</Link><br/>
                    <Link to ='./heartsandflowers' className = 'dashboardLink'>Hearts And Flowers </Link><br/>
                    <p> Log Out</p>
                </div>
            </div>
        )
    }
}

export default SideNav