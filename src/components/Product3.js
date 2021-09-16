import { useDispatch, useSelector } from 'react-redux';
function Product3({ item }) {
	var dispatch = useDispatch()
	const handleAddToFavourites =() =>{
		var action = { type:'add_to_favourites', data: item }
		dispatch(action)
	}

	return (
       <div className='font-16'>{item.name}
			<h5>
				<span className='text-danger'>Rs. {item.sellingPrice}</span>
				<span className='font-small'>
					<strike>Rs. {item.actualPrice}</strike>
				</span>
			</h5>
			<button className="btn btn-primary" onClick={e => handleAddToFavourites() } >
				Add to favourites
			</button>
			
</div>
		
	);
}
export default Product3;

