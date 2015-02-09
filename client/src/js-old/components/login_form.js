/** @jsx React.DOM */


var React     = require('react'),
    component = require('omniscient');

var d = React.DOM;


var LoginInput = component("LoginInput",function(props){

  return <input placeholder="Username or Email"/>//d.input({placeholder:"Username"});


})

var PasswordInput = component("PasswordInput",function(props){
  return <input placeholder="Password"/>;

})

var SubmitButton = component("SubmitButton",function(props){
  return <input value="Login" type="submit" />;
})

var LoginForm = component("LoginForm",function(props){

   return <div>
            <LoginInput/>
            <PasswordInput/>
            <SubmitButton.jsx/>
          </div>;
  // d.div({},LoginInput(props.cursor),PasswordInput(props.cursor),SubmitButton(props.cursor));;


})

module.exports = LoginForm;