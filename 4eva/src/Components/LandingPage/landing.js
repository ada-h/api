import React from 'react'
import AdvertisedServices from './advertisedServices'
import AdvertisedProducts from './advertisedProducts'
import '../LandingPage/landing.css'
import BlogPosts from '../Blog/blogPosts'
import Banner from './banner'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

const Landing = () =>{
    return(
        <div>
            <Navbar/>
            <Banner/>
            <div className = 'services'> 
                <AdvertisedServices/>
            </div>
            <div className = 'featuredPosts'>
             <BlogPosts/>
            </div>
            
            <div className = 'services'> 
                <AdvertisedProducts/>
            </div>
            <Footer/>
        </div>
       

    )
}

export default Landing