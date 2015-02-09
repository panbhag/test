/** @jsx React.DOM */


var React     = require('react');


var StartLocaion = React.createClass({


	render:function(){


		return (

				<input name="start_location" value={this.props.value}/>
			)




	}


});

module.exports = StartLocaion;