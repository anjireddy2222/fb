import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
	// variables
	var dispatch = useDispatch();
	var cartItems = useSelector((appData) => appData.cartItems);
	// HTML
	const handleIncrement = (id) => {
		var action1 = { type: 'increase_main_prouct_count', data: { productid: id, value: 1 } };
		dispatch(action1);
	};

	const handleDecrement = (id) => {
		var action1 = { type: 'decrement_main_product_count', data: { productid: id, value: 1 } };
		dispatch(action1);
	};

	return (
		<div className='col-4'>
			<h5>Your cart</h5>
			<p>{cartItems.length} items</p>
			<br />
			{cartItems.map((item) => (
				<div className='mb-2 border-bottom pb-2'>
					<h5>{item.title}</h5>
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

export default Cart;
