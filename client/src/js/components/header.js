/** @jsx React.DOM */


var React     = require('react');

var Header = React.createClass({

 render:function(props){

  return (

		<div className="map-wapper-opacity">
			<div className="container">
				<div className="row">
					<div className="row">
						<div className="col-sm-4">
							<div className="language-opt custom-select-box custom-select-box2 tec-domain-cat7" id="translateElements">
								<select className="selectpicker" data-live-search="false">
									<option>English</option>
									<option>Bangla</option>
									<option>Hindi</option>
								</select>
							</div>
							
							<div className="call-us">
								<span className="img-circle"><i className="fa fa-phone"></i></span> 
								<p>24x7 Call Us at (080) 33553355</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="logo-wraper">
								<div className="logo">
									<a href="index.html">
										<img src="images/logo.png" alt="" />
									</a>
								</div>
							</div>	
						</div>
						<div className="col-sm-4">
							<div id="languages" className="resister-social"> 
								
								<div className="login-register">
									<a href="#">Login</a>
									<a href="#">Register</a>
								</div>
								<div className="social-icon">
									<a href="#" className="img-circle">
										<i className="fa fa-facebook"></i>
									</a>
									<a href="#" className="img-circle">
										<i className="fa fa-twitter"></i>
									</a>
									<a href="#" className="img-circle">
										<i className="fa fa-tumblr"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-sm-1">
							<div className="header-menu-wrap">
								<nav className="navbar navbar-default" role="navigation"> 
									<div className="main  collapse navbar-collapse"> 
										<div className="column">
											<div id="dl-menu" className="dl-menuwrapper">
												<a href="#" className="dl-trigger" data-toggle="dropdown"><i className="fa fa-align-justify"></i></a> 
												<ul className="dl-menu">
													<li>
														<a href="#">Home Page Variants</a>
														<ul className="dl-submenu ">
															<li><a href="index.html">Home Variant 1</a></li>
															<li><a href="index2.html">Home Variant 2</a></li>
															<li><a href="index3.html">Home Variant 3</a></li>
															<li><a href="index4.html">Home Variant 4</a></li>
															<li><a href="index5.html">Home Variant 5</a></li>
															<li><a href="index6.html">Home Variant 6</a></li>
															<li><a href="index7.html">Home Variant 7</a></li>
															<li><a href="index8.html">Home Variant 8</a></li>
															<li><a href="index9.html">Home Variant 9</a></li>
															<li><a href="index10.html">Home Variant 10</a></li>
															<li><a href="index11.html">Home Variant 11</a></li>
															<li><a href="index12.html">Home Variant 12</a></li> 
														</ul>
													</li>
													<li>
														<a href="#">Home Page Variants2</a>
														<ul className="dl-submenu "> 
															<li><a href="index13.html">Home Variant 13</a></li>
															<li><a href="index14.html">Home Variant 14</a></li>
															<li><a href="index15.html">Home Variant 15</a></li>
															<li><a href="index16.html">Home Variant 16</a></li>
															<li><a href="index17.html">Home Variant 17</a></li>
															<li><a href="index18.html">Home Variant 18</a></li>
															<li><a href="index19.html">Home Variant 19</a></li>
															<li><a href="index20.html">Home Variant 20</a></li>
															<li><a href="index21.html">Home Variant 21</a></li>
															<li><a href="index22.html">Home Variant 22</a></li>
															<li><a href="index23.html">Home Variant 23</a></li>
															<li><a href="index24.html">Home Variant 24</a></li> 
														</ul>
													</li>
													<li>
														<a href="#">Results Page Variants</a>
														<ul className="dl-submenu">
															<li><a href="Results_1.html">Result Variant 1</a></li>
															<li><a href="Results_2.html">Result Variant 2</a></li>
															<li><a href="Results_3.html">Result Variant 3</a></li>
															<li><a href="Results_4.html">Result Variant 4 </a></li> 
														</ul>
													</li>
													<li>
														<a href="#">Booking Variants</a>
														<ul className="dl-submenu">
															<li><a href="Results_5.html">Booking Variants 1</a></li>
															<li><a href="Results_6.html">Booking Variants 2</a></li>  
														</ul>
													</li> 
												</ul>
											</div> 
										</div>
									</div> 
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>




  	);


}
}
)

module.exports = Header;