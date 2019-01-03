import React, {Component} from 'react'
import {connect} from 'react-redux'
import WOW from 'wowjs'

class Banner extends Component{
   
    componentDidMount(){
        const wow = new WOW.WOW()
        wow.init()
    }
    render(){
        const {bannerImages} = this.props
        const FirstSlide ={
            backgroundImage:`url(${bannerImages[0].image})`
        }
        const SecondSlide ={
            backgroundImage: `url(${bannerImages[1].image})`
        }
        return(
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active banner" style = {FirstSlide}>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className = 'carouselh5 wow bounceInUp ' data-wow-delay='0.5s'> {bannerImages[0].mainMessage} </h5>
                            <button className = 'pinkbutton wow infinite pulse carouselp'>{bannerImages[0].accompanyingMessage} </button>
                        </div>
                    </div>
                    <div className="carousel-item banner" style ={SecondSlide}>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className = 'carouselh5 wow zoomIn' data-wow-delay='0.5s'>{bannerImages[1].mainMessage} </h5>
                            <button className = 'pinkbutton carouselp wow infinite pulse'>{bannerImages[1].accompanyingMessage} </button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev controls" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next controls" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

const MapStateToProps = (state) =>{
    return{
        bannerImages: state.bannerImages
    }
}

export default connect(MapStateToProps)(Banner)