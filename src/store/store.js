import { createStore } from 'redux';
// test comment
var appData =
	localStorage.getItem('appData') == null
		? {
				noOfProducts: 0,
				wishList: [],				cartItems: [],
				userName: 'Anji Reddy',
				userPic: 'https://fasfasfagag.com/sfasfaf.jpg',
				userId: 4545455,
				swiggyProducts: [
					{ id: 1, title: 'Chicken biryani 1', desc: 'Hyderabadi biryani', price: 200, selectedCount: 0 },
					{ id: 2, title: 'Chicken biryani 2', desc: 'Hyderabadi biryani', price: 250, selectedCount: 0 },
					{ id: 3, title: 'Chicken biryani 3', desc: 'Hyderabadi biryani', price: 300, selectedCount: 0 },
					{ id: 4, title: 'Chicken biryani 4', desc: 'Hyderabadi biryani', price: 350, selectedCount: 0 },
					{ id: 5, title: 'Chicken biryani 5', desc: 'Hyderabadi biryani', price: 400, selectedCount: 0 },
				],
		  }
		: JSON.parse(localStorage.getItem('appData'));

function updateAppData(data = appData, action) {
	if (action.type == 'decrement_main_product_count') {
		var newData = [...data.swiggyProducts];
		var newCartItem = {};
		var cartCount = 0;
		newData.map((item) => {
			if (item.id == action.data.productid) {
				var count = item.selectedCount - 1;
				cartCount = count;
				if (count < 0) {
				}
				item.selectedCount = count;
				newCartItem = item;
			}
			return item;
		});
		data.swiggyProducts = [...newData];

		// update cart
		var isItemAddedTocart = false;
		data.cartItems.map((item) => {
			if (item.id == action.data.productid) {
				isItemAddedTocart = true;
			}
		});
		if (isItemAddedTocart == false) {
			var newcartItems = [...data.cartItems];
			newcartItems.push(newCartItem);
			data.cartItems = [...newcartItems];
		} else {
			var newcartItems = [...data.cartItems];
			console.log(1, [...data.cartItems]);
			newcartItems.map((item) => {
				if (item.id == action.data.productid) {
					var count = item.selectedCount - 1;
					if (count < 0) {
						count = 0;
					}
					item.selectedCount = count;
				}
				return item;
			});
			console.log(2, newcartItems);
			data.cartItems = [...newcartItems];
		}
		// remove if coun
		if (cartCount <= 0) {
			console.log("anji's comment");
			var tempData = [];
			var tempCartData = [...data.cartItems];
			tempCartData.map((item) => {
				if (item.id != action.data.productid) {
					tempData.push(item);
				}
			});
			data.cartItems = [...tempData];
		}
	}

	if (action.type == 'increase_main_prouct_count') {
		// updating main product count
		var newData = [...data.swiggyProducts];
		var newCartItem = {};
		newData.map((item) => {
			if (item.id == action.data.productid) {
				item.selectedCount = item.selectedCount + action.data.value;
				newCartItem = item;
			}
			return item;
		});
		data.swiggyProducts = [...newData];

		// add to cart
		var isAddedToCart = false;
		data.cartItems.map((item) => {
			if (item.id == action.data.productid) {
				isAddedToCart = true;
			}
		});
		if (isAddedToCart == false) {
			var newItems = [...data.cartItems];
			newItems.push(newCartItem);
			data.cartItems = [...newItems];
		} else {
			var newcartItems = [...data.cartItems];
			newcartItems.map((item) => {
				if (item.id == action.data.productid) {
					item.selectedCount = item.selectedCount + action.data.value;
				}
				return item;
			});
			data.cartItems = [...newcartItems];
		}
	}

	if (action.type == 'increment_no_of_products') {
		data.noOfProducts = data.noOfProducts + action.value;
	}

	if (action.type == 'decrement_no_of_products') {
		data.noOfProducts = data.noOfProducts - action.value;
	}

	if ((action.type = 'update_user_id')) {
		data.userId = action.value;
	}

	return data;
}

var dataStorage = createStore(updateAppData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

dataStorage.subscribe(() => {
	localStorage.setItem('appData', JSON.stringify(dataStorage.getState()));
});

export default dataStorage;
