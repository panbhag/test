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
				<div class="google-image">
					<div id="directions-panel"></div>
					<div id="map-canvas"></div>
				</div>
				<div>
					<GeoPicker/>
				</div>
				<div id='cab-type-list'>
					<CabTypeList cabTypes={data.cabTypes} selectedCabType={data.selectedCabType} cabLocations={data.cabLocations}/>
				</div>
			</div>
			)
	}


})

module.exports = RideNow;