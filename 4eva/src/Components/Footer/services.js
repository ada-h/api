import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Services extends Component{
    render(){
        const{services} = this.props
    const EachService = services.length ? (
        services.map(service =>{
            return  ( 
                <ul key={service.id}> 
                    <Link to ={`/service/${service.id}`} className="lead"> {service.service}</Link>
                </ul>
            )
        })
        ): (
        <div> 
            Wedding Vendors
         </div>
        
    )

    return(
        <div>
            {EachService}
        </div> 
    )
    }
}

const mapStateToProps = (state)=>{
    return {
        services: state.services
    }

}

export default connect(mapStateToProps) (Services)