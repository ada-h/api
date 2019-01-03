import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import BlogPosts from '../Blog/blogPosts'
import BlogLanding from './blogLanding'

const Blog = ()=>{
    return(
        <div>
            <Navbar/>
            <BlogLanding/>
            <BlogPosts/>
            <Footer/>
        </div>
    )
}

export default Blog