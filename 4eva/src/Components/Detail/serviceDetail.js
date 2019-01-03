import React, {Component} from 'react'
import {connect }from 'react-redux'


class ServiceDetail extends Component{
    render(){
        const {detail} = this.props
        return(
            <div>
                <img src ={detail.image} alt ={detail.vendor}/>
                <p> Contact Deatils: 
                    Name: {detail.vendor}
                    Email: {detail.contactDetails}
                    Phone Number: 
                    Rating: 
                </p>
            </div>
        )
    }
}

const MapStateToProps =(state,ownProps) =>{
let id = parseInt(ownProps.match.params.portfolio_Id)
return{
    detail: state.services[1].more.find(detail => id === detail.id)
}
}
export default connect(MapStateToProps) (ServiceDetail)