var Actions = {};
var bus = require('bus');

var data = require("./data.js");

Actions.changeCabType = function(cabType){


	data.selectedCabType.set(cabType);

	var cabLocations = data.cabLocations.getValue();
	var newLocations = cabLocations[data.selectedCabType.getValue()];
	bus.emit('markers.change',newLocations);


}

module.exports = Actions;