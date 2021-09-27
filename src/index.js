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
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Location from './components/Location'
import ClassComp from './ClassComp';
import List from './components/classComponents/List';
import Test from './Test';
import Interview from './Interview';
import InterviewTwo from './InterviewTwo';
import InterviewThree from './InterviewThree';


ReactDOM.render(
	<Provider store={dataStorage}>

		<React.StrictMode>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={InterviewThree} />
					<Route exact path='/shop' component={Shop} />
					<Route exact path='/facebook' component={Home} />
					<Route exact path='/swiggy' component={SwiggyHome} />
					<Route exact path="/wishlist" component={Wishlist} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/location" component={Location} />
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