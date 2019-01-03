import React, {Component} from 'react'

class MakeUploads extends Component{
    render(){
        return(
            <div className =' uploadheader col-lg-8 col-sm-12'>
                <div className = ' uploads'>
                  Uploads:
                </div>
                <form className = 'uploadForm'>
                    <input type =  'file'/> <input type ="text" placeholder = 'Reference' /> <br/>
                    <input type =  'file'/> <input type ="text" placeholder = 'Reference'/><br/>
                    <input type =  'file'/> <input type ="text"placeholder = 'Reference' /><br/>  
                    <input type = 'button' value = "submit"/>   
                </form>

            </div>
        )
    }
}


export default MakeUploads