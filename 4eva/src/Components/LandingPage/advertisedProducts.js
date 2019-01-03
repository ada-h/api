import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import WOW from 'wowjs'


class AdvertisedProducts extends Component{
    componentDidMount(){
        const wow = new WOW.WOW()
        wow.init()
    }

    render(){
        const {products} =this.props
        const AllProduct = products.length ? 
        (
           products.map(product =>{
               return(
                <div key = {product.id} className="col-lg-3 col-sm-6">                                    
                    <Link to ={`/product/${product.id}`} className = 'link'>
                    <img src={product.backgroundImage} alt="..." className="wow zoomIn d-block img-thumbnail img-responsive serviceImage" data-wow-delay='0.5s'/>
                    <p className ='wow pulse label'> {product.product}</p>                    
                    </Link>
                </div>
               )
           })
           
        )
        :
        (
            <div>
                ... Loading Products
            </div>
        )
        return(
           <div className = 'wow bounceIn row serviceImages'>
               {AllProduct}
           </div>
        )
    }
}
const MapStateToProps = (state) =>{
    return{
        products: state.products
    }
}

export default connect(MapStateToProps) (AdvertisedProducts)