import React, {Component} from 'react'
import {connect} from 'react-redux'

class Uploaded extends Component{
    render(){
        return(
            <div className =' filedetail col-lg-3 col-sm-12'>
                <div className = 'file'>
                    I will be a picture <br/>
                    I will be a picture <br/>
                    I will be a picture <br/>
                    I will be a picture <br/>
                </div>
                I have files
                Likes
                <div className ='timeofUpload'> 
                    Uploaded on
                </div>  
 
            </div>
        )
    }
}

const MapStateToProps = (state, ownProps) =>{

}
export default connect(MapStateToProps) (Uploaded)