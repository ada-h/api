import React, {Component} from 'react'
import './coupleslider.css'
import {connect} from 'react-redux'

class CoupleSlider extends Component{
    render(){
        const {couple} = this.props
        return(
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={couple[0].coupleImage} alt="First slide" />
                        <img className="d-block w-100" src={couple[1].coupleImage} alt="First slide" />
                        <img className="d-block w-100" src={couple[2].coupleImage} alt="First slide" />
                        <img className="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide" />
                        <img className="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" />
                        <img className="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" />
                        <img className="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" />
                    </div>
                </div>
            </div>
        )
    }
}
const MapStateToProps = (state)=>{
    return {
        couple: state.couplegallery
    }
}
export default connect(MapStateToProps)(CoupleSlider) 