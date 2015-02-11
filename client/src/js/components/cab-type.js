/** @jsx React.DOM */


var React     = require('react');
var Actions = require('./../actions')


var CabType = React.createClass({

	trigger:function()
	{
		$("#geopicker").trigger("geocode");

	},

	classString:function(){

		var classAttr="carTr";

		if(this.props.selectedCabType.getValue() == this.props.cabType.name.getValue().toLowerCase())
		{
			classAttr = classAttr + " active";
		}
		return classAttr;

	},

	selected:function(){
		Actions.changeCabType(this.props.cabType.name.getValue().toLowerCase());
	},

	checked:function()
	{

		if(this.props.selectedCabType.getValue() == this.props.cabType.name.getValue().toLowerCase())
		{
			return true
		}
		else
		{
			return null
		}

	},

	render:function(){
		var cabType = this.props.cabType;
		var cabIconClass = "cab-ico ico-"+ cabType.name.getValue().toLowerCase();
		var numberOfCabs = this.props.cabLocations.getValue().length;
		return (

	      <tr className={this.classString()} onClick={this.selected} >
	        <td><input type="radio" checked={this.checked()} className="p2pFare" name="p2p_fare" value="441" tabindex="1" data-basekm="4.0"/></td>
	        <td>
		     <div className="taxiInfo">
                    <div className={cabIconClass}></div>
		         <div className="taxiData">
		             <p className="taxiName">{cabType.name.getValue()}</p>({numberOfCabs})
		             <p className="taxiCondi">{cabType.seatCount.getValue()}  Seater AC</p>
		         </div>
		     </div>    
			</td>
	        <td>
                <div align="center" className="carCost basefare" value="49.00"><span className="WebRupee">₹ {cabType.cost.base.rate.getValue()}.00</span> <span className="taxiExtra">for the first</span> {cabType.cost.base.distance.getValue()}.0 km </div>
                <div align="center" className="carCost perkm" value="16.00">( <span className="WebRupee">₹ {cabType.cost.after.rate.getValue()}.00 / km</span> )</div>
                
            </td>
	      </tr>

	  	)
	}
})

module.exports = CabType;