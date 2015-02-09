/** @jsx React.DOM */


var React = require('react');

var Map = require('react-map/src/map');

// var Map = React.createClass({


// 	render:function(){


// 		return (
// 				<div id="map-canvas">
// 				This Is Map
// 				</div>
// 			)

// 	}

// 	initialize: function() {
//         var mapCanvas = document.getElementById('map-canvas');
//         var mapOptions = {
//           center: new google.maps.LatLng(44.5403, -78.5463),
//           zoom: 8,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//         var map = new google.maps.Map(mapCanvas, mapOptions)
//       }


// })

module.exports = Map;