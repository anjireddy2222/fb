import { useDispatch, useSelector } from 'react-redux';


function Product3({ item }) {
	var dispatch = useDispatch()

	const handleAddToWishList =() =>{
		var action = { type:'add_to_favourites', data: item }
		dispatch(action)
	}

	return (
		<div className='col-3 mb-5 pb-2'>
			<img src={item.imagePath} className='product-image' />
			<p className='font-16'>{item.name}</p>
			<h5>
				<span className='text-danger'>Rs. {item.sellingPrice}</span>
				<span className='font-small'>
					<strike>Rs. {item.actualPrice}</strike>
				</span>
			</h5>
			<p>{item.comments}</p>
			<button className="btn btn-primary" onClick={e => handleAddToWishList() } >
				Add to favourites
			</button>
		</div>
	);
}
export default Product3;

