import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Products extends Component{
    render(){
        const {products} =this.props
    const EachProduct = products.length ? (
        products.map(product =>{
            return  ( 
                <ul key={product.id}> 
                    <Link to ={`/product/${product.id}`} className="lead"> {product.product}</Link>
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
            {EachProduct}
        </div> 
    )
    }
}

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }

}

export default connect(mapStateToProps) (Products)