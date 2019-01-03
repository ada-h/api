import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import WOW from 'wowjs'

class AdvertisedServices extends Component{
    componentDidMount(){
        const wow = new WOW.WOW()
        wow.init()
    }
    render(){
        const {services} =this.props
        const AllService = services.length ? 
        (
           services.map(service =>{
               return(
                    <div key = {service.id} className=" col-lg-3 col-md-6">  
                        <Link to ={`/service/${service.id}`} className = 'link'>            
                            <img src={service.backgroundImage} alt="..." className="wow flipInY d-block img-thumbnail img-responsive serviceImage data-wow-offset='50' data-wow-delay='0.5s'"/>
                            <p className='wow rubberBand label' data-wow-delay='.5s'>{service.service}</p>
                        </Link>
                    </div>
               
 
               )
           })
           
        )
        :
        (
            <div>
                ... Loading Services
            </div>
        )
        return(
           <div className = 'row serviceImages'>
               {AllService}
           </div>
        )
    }
}
const MapStateToProps = (state) =>{
    return{
        services: state.services
    }
}

export default connect(MapStateToProps) (AdvertisedServices)