import React, {Component} from 'react'
import {connect} from 'react-redux'

class Post extends Component{
    render(){
        const {post} = this.props
        console.log(post)
        return(
            <div>
               <img src ={post.postPicture} alt ={post.postHeading}/>
                <h2>{post.postHeading} </h2>
                <p>By: {post.author} </p>
                <div>
                    {post.post}
                </div>     
                 You May also Like...    
            </div>
        )
    }
}
const MapStateToProps= (state, ownProps)=>{
    let id = parseInt(ownProps.match.params.postId)
    return{
        post: state.posts.find(post => post.id === id)
    }
}
export default connect(MapStateToProps)(Post)
