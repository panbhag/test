var Cortex = require('cortexjs');
var bus = require('bus');
var CabLocation = require('./cab-location');

var data = {

	user:{name:"Pankaj Bhageria",gender:"Male",age:30},
	startLocation:{name:"SilkBoard",geoPoint:{lat:"21",lng:"20"}},
	cabTypes:[{name:"Mini",seatCount:4,cost:{base:{distance:6.0,rate:100.0},after:{rate:10.0}}},
			  {name:"Sedan",seatCount:4,cost:{base:{distance:8.0,rate:150.0},after:{rate:13.0}}},
			  {name:"Prime",seatCount:2,cost:{base:{distance:5.0,rate:200},after:{rate:18.0}}}],
    selectedCabType : "mini",
    currentLocation:{lat:21,lng:20},
    cabLocations:{
    			  "mini":[],
    			  "sedan":[],
    			  "prime":[]
    			},
	markers:[{lat:12.917746,lng:77.623788},
	{lat:12.9175368536987,lng:77.627392888916},
	{lat:12.915507725486131,lng:77.61984008833008},
	{lat:12.9202971707801,lng:77.62138504072266}]
}

data = new Cortex(data);


bus.on('location.changed',function(lat,lng){

	data.currentLocation.set({lat:lat,lng:lng});
	var locations = CabLocation.get(lat,lng);
	data.cabLocations.set(locations);
	bus.emit('markers.change',locations[data.selectedCabType.getValue()]);

})





module.exports = data;
