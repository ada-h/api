import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Footer from '../Footer/footer'
import Services from '../Footer/services'
import Products from '../Footer/products'
import Sort from '../Products/sort'
import './portfolio.css'
import Navbar from '../Navbar/navbar'
import CustomBanner from '../CustomBanner/custombanner'
import Search from '../UserDashboard/search'

class PortfolioShowcase extends Component{
   
    render(){
       
        const{more} = this.props.service
        const Portfolios = more.length ? 
        (
           more.map(portfolio =>{
               return(
                <div key = {portfolio.id} className="col-lg-3 col-sm-6">                
                    <img src={portfolio.image} alt="..." className=" img-thumbnail img-responsive"/>
                    <p> Location: {portfolio.location}</p>
                    <Link to ={`/${portfolio.category}/${portfolio.id}`}>contact {portfolio.vendor}</Link>                   
                </div>
               )
           })
           
        )
        :
        (
            <div>
                ... {this.props.service.service} Coming Soon
            </div>
        )
        return(
            <div className = 'portfolioShowcase'>
                <Navbar/>
                <CustomBanner service = {this.props.service}/>               
                <div className = 'row'> 
                    <Sort/>
                    <Search/>
                </div>             
                <div className = 'row'>
                    <div className = "sidesale col-lg-3">
                        <Services/>
                        <Products/>                      
                    </div>               
                    <div className = 'col-lg-9'>
                        {Portfolios}
                    </div>       
                </div>
               <Footer/>
            </div>
        )
    }
}

const MapStateToProps =(state, ownProps)=>{
    let id = parseInt(ownProps.match.params.service_Id);
    return{
        service: state.services.find(service => service.id === id)
    }
}

export default connect(MapStateToProps)(PortfolioShowcase)