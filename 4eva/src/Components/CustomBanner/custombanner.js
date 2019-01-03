import React, {Component} from 'react'
import './custombanner.css'

class CustomBanner extends Component{
    render(){
        const {service} = this.props
        const backgroundImage ={
            backgroundImage: `url(${service.backgroundImage})`,
        }
        return(
            <div className="container-fluid row custombanner">
                <div className = 'col-lg-6 customimage' style = {backgroundImage}>      
                </div>   
                <h5 className = 'col-lg-6 customtext'> {service.service}</h5>      
            </div>
        )
    }
}


export default  CustomBanner