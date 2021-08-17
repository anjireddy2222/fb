import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
	// variables
	var dispatch = useDispatch();
	var products = useSelector((appData) => appData.swiggyProducts);

	const handleIncrement = (id) => {
		var action1 = { type: 'increase_main_prouct_count', data: { productid: id, value: 1 } };
		dispatch(action1);
	};

	const handleDecrement = (id) => {
		var action1 = { type: 'decrement_main_product_count', data: { productid: id, value: 1 } };
		dispatch(action1);
	};
	// HTML
	return (
		<div className='row'>
			{products.map((item) => (
				<div className='col-12 mb-2 border-bottom pb-2'>
					<h3>{item.title}</h3>
					<p>Rs. {item.price}</p>
					<button className='btn btn-light' onClick={(e) => handleDecrement(item.id)}>
						&nbsp;-&nbsp;
					</button>
					{item.selectedCount}
					<button className='btn btn-light' onClick={(e) => handleIncrement(item.id)}>
						&nbsp;+&nbsp;
					</button>
				</div>
			))}
		</div>
	);
};

export default Products;
