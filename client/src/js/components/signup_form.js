/** @jsx React.DOM */


var React     = require('react');
var d = React.DOM;

// var Input = component("Input",function(props){
// 		var handleChange = function (event) {
// 			this.setState({value: event.target.value});
// 			//alert(event.target.value);
// 		}
// 	return <input placeholder={props.placeholder} type = {props.type} value = {props.value} onChange={handleChange}/>
// })

var Input = React.createClass({

  value:function(){
  	return this.state.value;
  },
  handleChange:function(event){
 			this.setState({value: event.target.value});
  },
  render: function () {
    return (<input placeholder={this.props.placeholder} type = {this.props.type} value = {this.props.value} onChange={this.handleChange}/>
    );
  }
});


var SignupForm = React.createClass({

	onSubmit : function(){

		//alert('Form Submitted');
		alert(this.refs['email'].value());
		event.preventDefault();
	},

	render :function(){
   		return <div>
   			<form onSubmit={this.onSubmit}>
	            <Input ref="email" placeholder="email" />
	            <Input ref="username" placeholder ="username"/>
	            <Input ref="password" type="password" placeholder="password"/>
	            <Input ref="submit" value="Signup" type="submit"  />
            </form>
          </div>;

	}
  // d.div({},LoginInput(props.cursor),PasswordInput(props.cursor),SubmitButton(props.cursor));;


})

module.exports = SignupForm;