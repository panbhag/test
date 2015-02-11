/** @jsx React.DOM */


var React     = require('react');





var GeoPicker = React.createClass({


	render:function(){
		var cabType = this.props.cabType;
		return (
				<div>
				<div className="google-image">
					<div id="map-canvas"></div>
				</div>
				<input type="text" id="geopicker" placeholder="Enter your pickup location" />
				</div>
			)	
	},
	componentDidMount:function(){
		$("#geopicker").geocomplete({
  			map: "#map-canvas",
  			location: "Silk Board Flyover, Madiwala, Bengaluru, Karnataka, India",
  			markerOptions: {
            	draggable: true
          	},
          	markers:this.props.markers,
          	mapOptions:{
          		zoom:14, //default
          		//panControl:true,
	          	//panControlOptions:{position:"LEFT_CENTER"}

          	},
          	otherMarkerOptions:{
          		          animation: google.maps.Animation.DROP,
          				  icon:"images/taxi.png"
          	}
		});

	}
})

module.exports = GeoPicker;