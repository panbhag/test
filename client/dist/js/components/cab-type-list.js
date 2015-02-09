/** @jsx React.DOM */


var React     = require('react');
var CabType = require('./cab-type');

var CabTypeList = React.createClass({


	render:function(){

		var cabTypes = this.props.cabTypes.map(function(cabType){

			return <CabType cabType={cabType}/>

		});

		return (

			<div className="stepContent">
                <div className="contentRow">
                    <div className="carPrice">
						<table className="carList">
							<thead>
							 	<tr>
							     	<th colspan="2" className="firstTh">Select Car</th>
						            <th>Fare</th>
								</tr>
							</thead>
							<tbody>
							  {cabTypes}
							</tbody>
						</table>
						<p style={{fontSize:'12px', fontFamily:'sans-serif'}}>Terms &amp; Conditions</p>
						<p style={{fontSize:'10px'}}>* Fares inclusive of Rs. 50 surcharge during peak times.</p>
						<p style={{fontSize:'10px'}}>* Maximum of 4 passengers allowed for Indica &amp; Sedan.</p>
        				<p style={{fontSize:'10px'}}>* Any Toll, Parking as applicable.</p>
        				<p style={{fontSize:'10px'}}>* In-traffic charges of Rs.1/min applicable.</p>
						<p style={{fontSize:'10px'}}>* Cancellation charges of Rs.100 applicable if cancelled within 30 mins of pickup time.</p>

					</div>
                </div>
 			</div>

			)
	}
})

module.exports = CabTypeList;