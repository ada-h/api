import React, {Component} from 'react'
import Location from '../Registration/location'


class Sort extends Component{
    render(){
        return(
            <form className='col-lg-3 sort'>
                <select name="sorting">
					<option>Sort by...</option>
					<option>Location</option>
					<option>Ratings</option>
					<option>Price: high to low</option>
                    <option>Price:low to high</option>
				</select>
                <select name="sorting">
					<option>Price</option>
					<option>#3,000.00- #10,000.00</option>
					<option>#11,000.00 - #30,000.00</option>
					<option>#31,000.00 - #50,000.00</option>
				    <option>#51,000.00 - #99,000.00</option>
					<option>#100,000.00+</option>
                </select>
                <Location/>
            </form>
         )
    }

}
export default Sort