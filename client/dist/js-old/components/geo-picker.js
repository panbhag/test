/** @jsx React.DOM */


var React     = require('react');


var GeoPicker = React.createClass({
	render:function(){
		var cabType = this.props.cabType;
		return (
				<div>
					<input type="text" id="geopicker" />
					<div id="map-canvas"></div>
				</div>
			)
	},
	componentDidMount:function(){
		alert("geopicker mounted 2");
		$("#geopicker").geocomplete({
  			map: "#map-canvas",
  			location: "Silk Board Flyover, Madiwala, Bengaluru, Karnataka, India"
		});

	}
})

module.exports = GeoPicker;