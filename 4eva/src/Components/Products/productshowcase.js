import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Footer from '../Footer/footer'
import './showcase.css'

class ProductsShowCase extends Component{
    render(){
        const{more} = this.props.product
        const ShowCase = more.length ? 
        (
           more.map(portfolio =>{
               return(
                <div key = {portfolio.id} className="col-lg-3 col-sm-6">                
                    <img src={portfolio.image} alt="..." className=" d-block img-thumbnail img-responsive serviceImage"/>
                    <Link to ={`/product/${portfolio.id}`}>More by {portfolio.vendor}</Link>
                    
                </div>
                 
               )
           })
           
        )
        :
        (
            <div >
                ... {this.props.product.product} Coming Soon
            </div>
        )
        return(
            <div>
                {ShowCase}
                <Footer/>
            </div>
        )
    }
    
}

const MapStateToProps = (state, ownProps)=>{
    let id = parseInt(ownProps.match.params.product_Id)
    return{
        product: state.products.find(product => product.id === id)
    }

}

export default connect(MapStateToProps) (ProductsShowCase)