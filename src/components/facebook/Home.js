import { useState } from 'react';
import Content from './Content';
import Left from './Left';
import Nav from './Nav';
import Right from './Right';

function Home() {
	// variables
	var [noOfProducts, setNoOfProducts] = useState(0);

	const increment = () => {
		var newValue = noOfProducts + 1;
		setNoOfProducts(newValue);
	};

	

	//HTML
	return (
		<div className='container-fluid'>
			<Nav noOfProducts={noOfProducts} />
			<div className='row'>
				<Left />
				<Content increment={increment} />
				<Right />
			</div>
		</div>
	);
}

export default Home;
