import React, {Component} from 'react'
import {connect} from 'react-redux'
import './blog.css'
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class BlogPosts extends Component{
    render(){
        const {posts} =this.props
        const Featured = posts.length ? 
        (
           posts.map(post =>{
               return(
                    <div key= {post.id} className="card col-lg-3 col-sm-6 col-md-6" style={{width: '18rem'}}>
                        <img className="card-img-top" src={post.postPicture} alt= {post.author} />
                        <div className="card-body">
                        <h5> {post.postHeading}</h5>
                        <p className="card-text">{post.post}</p>
                            Likes  <FontAwesomeIcon icon={faHome} />
                            Comments
                            <Link to = {`/heartsandflowers/${post.id}`}> Read More</Link>
                        </div>
                    </div>
               )
           })
           
        )
        :
        (
            <div>
                ... Loading Posts
            </div>
        )
        return(
           <div className = 'row posts'>
               {Featured}
           </div>
        )
    }
}
const MapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}

export default connect(MapStateToProps)(BlogPosts) 