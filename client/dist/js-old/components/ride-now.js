/** @jsx React.DOM */


var React     = require('react');
var StartLocation = require('./start-location');
//var Map = require('./map');
var CabTypeList = require('./cab-type-list');
var GeoPicker = require('./geo-picker');
 
var data = require("./../data");

console.log(data);

var RideNow = React.createClass({

	

	render:function(){

		return (
				<div>
					<GeoPicker/>
					Pankaj
					<CabTypeList cabTypes={data.cabTypes} />
					<div>
						<input type='button' value="book"/>
					</div>
				</div>
			)




	}


})

module.exports = RideNow;