/** @jsx React.DOM */


var React     = require('react');

var Footer = React.createClass({render:function(props){

  return (

<div className="footer custom-footer">
			<div className="container">
				<div className="row">
					<div className="col-sm-7">
						<div className="row">
							<div className="menu-wrap">
								<div className="menu-col">
									<div className="menu-header"><p>About Us</p></div>
									<div className="menu-item">
										<ul>
											<li><a href="page26.html">About</a></li>
											<li><a href="page27.html">Services</a></li>
											<li><a href="page30.html">Career</a></li>
											<li><a href="index.html">Media</a></li>
											<li><a href="">Adverise </a></li>
											<li><a href="">Fleet</a></li>
											<li><a href="">Tariff</a></li>
											<li><a href="">Partners</a></li>
											<li><a href="">About</a></li>
										</ul>
									</div> 
								</div>
								<div className="menu-col menu-col-margin"> 
									<div className="menu-item menu-item2">
										<ul>
											<li><a href="">My Account</a></li>
											<li><a href="">Print Notice</a></li>
											<li><a href="">Vehicle Guide</a></li>
											<li><a href="">Easy Cabs</a></li>
											<li><a href="">About </a></li>
											<li><a href="">Services</a></li>
											<li><a href="">Career</a></li>
											<li><a href="">Media</a></li> 
										</ul>
									</div> 
								</div>
								<div className="menu-col2 ">
									<div className="menu-header"><p>Melbourne</p></div>
									<div className="menu-item">
										<ul>
											<li><a href="">97-99 Isabella St</a></li>
											<li><a href="">London SE1 8DD</a></li>
											<li><a href="">United Kingdom</a></li>
											<li className="menu-header menu-item3"><p>Queensland</p></li>
											<li><a href="">Columbo House </a></li>
											<li><a href="">50-60 Blackfriars Rd</a></li>
											<li><a href="">Blackfriars, London</a></li> 
										</ul>
									</div> 
								</div>
								<div className="menu-col2 responsive-frame642">
									<div className="menu-header"><p>Sydney</p></div>
									<div className="menu-item">
										<ul>
											<li><a href="">14 Gambia St</a></li>
											<li><a href="">Waterloo</a></li>
											<li><a href="">London SE1 0XH, UK</a></li> 
										</ul>
									</div> 
								</div>
							</div>	
						</div>
					</div>
					<div className="col-sm-5">
						<div className="row">
							<div className="footer-map-bg">
								
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="social-item">
						<a href="#" className="img-circle">
							<i className="fa fa-facebook"></i>
						</a>
						<a href="#" className="img-circle">
							<i className="fa fa-twitter"></i>
						</a>
						<a href="#" className="img-circle">
							<i className="fa fa-tumblr"></i>
						</a>
						<a href="#" className="img-circle">
							<i className="fa fa-twitter"></i>
						</a>
						<a href="#" className="img-circle">
							<i className="fa fa-tumblr"></i>
						</a>
					</div>
					<div className="copy-right">
						<p><span>TAKSI</span> &copy; Copyright 2014 | All Rights Rerved  | Designed by <a href="http://themeforest.net/user/vishnusathyan">Vishnu Sathyan</a> | Developed By <a href="http://www.themeskanon.com/">Themeskanon</a></p>
					</div>
				</div>
			</div>
		</div>


  	);


}
})

module.exports = Footer;