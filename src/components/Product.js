function Product({ item }) {
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
		</div>
	);
}
export default Product;


