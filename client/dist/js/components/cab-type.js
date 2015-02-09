/** @jsx React.DOM */


var React     = require('react');


var CabType = React.createClass({
	render:function(){
		var cabType = this.props.cabType;
		return (

	      <tr className="carTr active" >
	        <td><input type="radio" className="p2pFare" name="p2p_fare" value="441" tabindex="1" data-basekm="4.0"/></td>
	        <td>
		     <div className="taxiInfo">
                
                    <div className="icon sedan"></div>
                

		         <div className="taxiData">
		             <p className="taxiName">{cabType.name}</p>
		             <p className="taxiCondi">{cabType.seatCount}  Seater AC</p>
		         </div>
		     </div>    
			</td>
	        <td>
                <div align="center" className="carCost basefare" value="49.00"><span className="WebRupee">₹ 49.00</span> <span className="taxiExtra">for the first</span> 4.0 km </div>
                <div align="center" className="carCost perkm" value="16.00">( <span className="WebRupee">₹ 16.00 / km</span> )</div>
                
            </td>
	      </tr>

	  	)
	}
})

module.exports = CabType;