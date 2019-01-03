import React,{Component} from 'react'
import './footer.css'
import Services from './services'
import Products from './products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
class Footer extends Component{
    render(){
        return(
            <div className="jumbotron footer jumbotron-fluid">
                <div className="container row footerrow">
                    <div className = 'col-lg-4 col-sm-12'>
                        <h5 className= 'footerh1'> GET IN TOUCH </h5>
                        <ul className="lead"> 
                            <li><FontAwesomeIcon icon="facebook-official"/> Facebook</li>
                            <li> Twitter</li>
                            <li> Instagram</li>
                            <li> Whatsapp</li>
                        </ul>
                    </div>
                   
                    <div className = 'col-lg-4 col-sm-12'>
                        <h5 className= 'footerh1'> GET PRODUCTS </h5>
                        <Products/>
                    </div>
                   
                    <div className = 'col-lg-4 col-sm-12'>
                        <h5 className= 'footerh1'> GET SERVICES </h5>
                        <Services/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer