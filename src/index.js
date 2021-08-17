import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.css';
import Shop from './components/Shop';
import Home from './components/facebook/Home';
import { Provider } from 'react-redux';
import dataStorage from './store/store';
import SwiggyHome from './components/swiggy/Home';

ReactDOM.render(
	<Provider store={dataStorage}>
		<React.StrictMode>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={App} />
					<Route exact path='/shop' component={Shop} />
					<Route exact path='/facebook' component={Home} />
					<Route exact path='/swiggy' component={SwiggyHome} />
				</Switch>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
