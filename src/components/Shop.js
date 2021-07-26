import { useState } from 'react';
import Nav from '../Nav';
import Product from './Product';

function Shop() {
	var [products, setProducts] = useState([
		{
			name: 'OnePlus Bullets Wireless Z Bass Edition (Bold Black)',
			imagePath: 'https://m.media-amazon.com/images/I/51R4FJdgbMS._AC_UL480_FMwebp_QL65_.jpg',
			sellingPrice: 1999,
			actualPrice: 2199,
			comments: 'Get it by Tomorrow 5PM REE Delivery by Amazon',
		},
		{
			name: 'OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)',
			imagePath: 'https://m.media-amazon.com/images/I/61iy2Ru9KdS._AC_UL480_FMwebp_QL65_.jpg',
			sellingPrice: 20111,
			actualPrice: 20111,
			comments: 'FREE Delivery by Amazon In stock on August 26, 2021.',
		},
		{
			name: 'OnePlus Bullets Wireless Z Bass Edition (Reverb Red)',
			imagePath: 'https://m.media-amazon.com/images/I/61DKcGr12OL._AC_UL480_FMwebp_QL65_.jpg',
			sellingPrice: 1999,
			actualPrice: 2199,
			comments: 'Get it by Tomorrow, July 17 FREE Delivery by Amazon',
		},
		{
			name: 'OnePlus Buds Z (White)',
			imagePath: 'https://m.media-amazon.com/images/I/51vwQzwM+ZL._AC_UL480_FMwebp_QL65_.jpg',
			sellingPrice: 2999,
			actualPrice: 3199,
			comments: 'Get it by Tomorrow 5PM FREE Delivery by Amazon',
		},
		{
			name: 'OnePlus Bullets Wireless Z Bass Edition (Reverb Red)',
			imagePath: 'https://m.media-amazon.com/images/I/61DKcGr12OL._AC_UL480_FMwebp_QL65_.jpg',
			sellingPrice: 1999,
			actualPrice: 2199,
			comments: 'Get it by Tomorrow, July 17 FREE Delivery by Amazon',
		},
		{
			name: 'OnePlus Buds Z (White)',
			imagePath: 'https://m.media-amazon.com/images/I/51vwQzwM+ZL._AC_UL480_FMwebp_QL65_.jpg',
			sellingPrice: 2999,
			actualPrice: 3199,
			comments: 'Get it by Tomorrow 5PM FREE Delivery by Amazon',
		},
	]);

	return (
		<div className='container'>
			<Nav />
			<div className='row'>
				<div className='col-12'>
					<h3 className='font-weight-700'>Products</h3>
				</div>
			</div>
			<div className='row'>
				{products.map((item) => (
					<Product item={item} />
				))}
			</div>
		</div>
	);
}

export default Shop;
