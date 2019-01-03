import React, {Component} from 'react'

class Search extends Component{
    render(){
        return(
            <div className = 'input-group'>
                <input className= ' search' type ='text' placeholder= 'Search..'/>
                <button type = 'button' className= 'input-group-addon searchbutton' ></button>
            </div>

        )
    }
}

export default Search