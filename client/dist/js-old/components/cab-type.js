/** @jsx React.DOM */


var React     = require('react');


var CabType = React.createClass({
	render:function(){
		var cabType = this.props.cabType;
		return (

	      <tr class="carTr active" >
	        <td><input type="radio" class="p2pFare" name="p2p_fare" value="441" tabindex="1" data-basekm="4.0"/></td>
	        <td>
		     <div class="taxiInfo">
                
                    <div class="icon sedan"></div>
                

		         <div class="taxiData">
		             <p class="taxiName">{cabType.name}</p>
		             <p class="taxiCondi">{cabType.seatCount}  Seater AC</p>
		         </div>
		     </div>    
			</td>
	        <td>
                <div align="center" class="carCost basefare" value="49.00"><span class="WebRupee">₹ 49.00</span> <span class="taxiExtra">for the first</span> 4.0 km </div>
                <div align="center" class="carCost perkm" value="16.00">( <span class="WebRupee">₹ 16.00 / km</span> )</div>
                
            </td>
	      </tr>

	  	)
	}
})

module.exports = CabType;