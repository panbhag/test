/** @jsx React.DOM */


var React     = require('react'),
	page 	  = require('page'),
    _ 	  = require('lodash'),
    //LoginForm = require("./components/login_form.js"),
    SignupForm = require("./components/signup_form"),
    Header = require("./components/header.js"),
    Footer = require("./components/footer.js"),
    request = require('superagent');
    data = require('./data'),
    CabTypeList = require('./components/cab-type-list.js');

    //Cortex = require('cortexjs');






var pageRendeCallbacks = [];



//runs before all routes
page("*",function(ctx,next){

	pageRendeCallbacks = [];

	// request.post('/api/Users').send({email:"pankajbhageria@gmail.com",password:"pankaj"}).end(function(error, res){
	// 	console.log(error);
	// 	console.log(res);
	// });


	function render () {
	    React.render(Header(), document.getElementById('header'));
	    React.render(Footer(), document.getElementById('footer'));
	}

	pageRendeCallbacks.push(render);
	next();



});

page("/",function(ctx,next){

	var RideNow = require("./components/ride-now");

	function render () {
	    React.render(RideNow(), document.getElementById('content'));
	}
	pageRendeCallbacks.push(render);
	next();	
})

page("/test",function(ctx,next){

	var RideNow = require("./components/ride-now");

	function render () {
	    React.render(RideNow(), document.getElementById('content'));
	}
	pageRendeCallbacks.push(render);
	next();	
})


// page("/login",function(ctx,next){

// function render () {
//     React.render(LoginForm(structure.cursor()), document.getElementById('content'));
// }
// 	pageRendeCallbacks.push(render);
// 	next();

// });

page("/signup",function(ctx,next){

var SignupFormData = Immutable.Map({email:null, username:null, password:null});
function render () {
    React.render(SignupForm(SignupFormData), document.getElementById('content'));
}
	pageRendeCallbacks.push(render);
	next();

});



//the last route handler, runs after all the routes
page("*",function(ctx,next){

	//render view
	//structure.forceHasSwapped();
	renderAll();
})

page();


function renderAll()
{
	// call all functions in pageRendeCallbacks
	_.each(pageRendeCallbacks,function(renderFunction){
		renderFunction();
	})

}


data.on("update", function(){

	renderAll();
	//React.render(<CabTypeList cabTypes={data.cabTypes} selectedCabType={data.selectedCabType} />,document.getElementById('cab-type-list'))

});

//structure.on('swap', renderAll);


//module.exports = page;





