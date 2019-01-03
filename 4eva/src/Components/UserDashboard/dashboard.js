import React, {Component} from 'react'
import SideNav from './sidenav'
import './dashboard.css'
import Uploaded from './uploaded'
import MakeUploads from './makeUploads'
import Search from './search'

class Dashboard extends Component{
    render(){
        return(
            <div className = 'row'>
               <SideNav/>
               <Search/>
               <Uploaded/>
               <MakeUploads/>
                
            </div>
        )
    }
}

export default Dashboard