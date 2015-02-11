/** @jsx React.DOM */


var React     = require('react');

var getLocations = function(lat,lng){
        var numberOfPoints = randomNumber(0,15);

        var locations = [];

        for(var i=0;i<numberOfPoints;i++)
        {


            var lat = lat + randomVariation();
            var lng = lng + randomVariation();

            locations.push({lat:lat,lng:lng});

        }

        function randomVariation()
        {
          var variationScale = 0.01;
          //var variationFrom = 1*variationScale;
          //var variationTo =  10*variationScale;
          //var num = randomNumber(variationFrom,variationTo);
          var num = Math.random()*variationScale;
          num *= randomNumber(1,2) == 1 ? 1 : -1;
          return num;
        }



        function randomNumber(from,to){

          return Math.floor((Math.random() * to) + from);

        }

        return locations;


};


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
          	},
          	getLocations:getLocations
		});

	}
})

module.exports = GeoPicker;