import { createStore } from 'redux';

var appData =
	localStorage.getItem('appData') == null
		? {
				noOfProducts: 0,
				wishList: [],
				cartItems: [],
				userName: 'Anji Reddy',
				userPic: 'https://fasfasfagag.com/sfasfaf.jpg',
				userId: 4545455,
		  }
		: JSON.parse(localStorage.getItem('appData'));

function updateAppData(data = appData, action) {
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
