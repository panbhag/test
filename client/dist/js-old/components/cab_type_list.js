/** @jsx React.DOM */


var React     = require('react');
var CabType = require('./cab-type');

var CabTypeList = React.createClass({


	render:function(){

		var cabTypes = this.prop.cabTypes.map(function(cabtype){

			return <CabType cabtype={cabtype}/>

		});

		return (

			<div class="stepContent">
                <div class="contentRow">
                    <div class="carPrice">
						<table class="carList">
							<thead>
							 	<tr>
							     	<th colspan="2" class="firstTh">Select Car</th>
						            <th>Fare</th>
						            <!--th>First 4.0 km</th>
						            <th>After 4.0 Km</th-->
								</tr>
							</thead>
							<tbody>
							  {cabTypes}
							</tbody>
						</table>
						<p style="font-size:12px; font-family: 'TaxiForSure-Bold',sans-serif;">Terms &amp; Conditions</p>
						<p style="font-size:10px;">* Fares inclusive of Rs. 50 surcharge during peak times.</p>
						<p style="font-size:10px;">* Maximum of 4 passengers allowed for Indica &amp; Sedan.</p>
				        <!--p style='font-size:10px;'>* Upto 3 items of luggage allowed in Hatchbacks & Sedans; Rs.50 per extra item.</p-->
        				<p style="font-size:10px;">* Any Toll, Parking as applicable.</p>
        				<p style="font-size:10px;">* In-traffic charges of Rs.1/min applicable.</p>
						<p style="font-size:10px;">* Cancellation charges of Rs.100 applicable if cancelled within 30 mins of pickup time.</p>

					</div>
                </div>
 			</div>

			)
	}
})

module.exports = CabTypeList;