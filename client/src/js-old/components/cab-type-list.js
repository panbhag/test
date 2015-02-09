/** @jsx React.DOM */


var React     = require('react');
var CabType = require('./cab-type');

var CabTypeList = React.createClass({


	render:function(){

		var cabTypes = this.props.cabTypes.map(function(cabType){

			return <CabType cabType={cabType}/>

		});
		return (
				<div>
					{cabTypes}
				</div>
			)

	}
})

module.exports = CabTypeList;