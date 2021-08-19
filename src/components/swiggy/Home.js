const { useState } = require('react');
const { default: Cart } = require('./Cart');
const { default: Products } = require('./Products');

const SwiggyHome = () => {
	// variables
	
	// HTML
return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h3 className='text-warning'>Swiggy</h3>
				</div>
			</div>
			<div className='row'>
				<div className='col-8'>
					<Products />
				</div>
				<Cart />
			</div>
		</div>
	);
};

export default SwiggyHome;
