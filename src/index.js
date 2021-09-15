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
import Favourites from './components/Favourites';
import Product3 from './components/Product3';
ReactDOM.render( <
    Provider store = { dataStorage } >
    <
    React.StrictMode >
    <
    BrowserRouter >
    <
    Switch >
    <
    Route exact path = '/'
    component = { List }
    /> <
    Route exact path = '/shop'
    component = { Shop }
    /> <
    Route exact path = '/facebook'
    component = { Home }
    /> <
    Route exact path = '/swiggy'
    component = { SwiggyHome }
    /> <
    Route exact path = "/wishlist"
    component = { Wishlist }
    /> <
    Route exact path = "/login"
    component = { Login }
    /> << <<
    << < HEAD <
    Route exact path = "/favourites"
    component = { Favourites }
    /> <
    Route exact path = "/Product3"
    component = { Product3 }
    /> === ===
    = <
    Route exact path = "/location"
    component = { Location }
    /> >>> >>>
    > 20 dd1abb83d5499439bbbc1c4e646c70f7c5d828 <
    /Switch> < /
    BrowserRouter > <
    /React.StrictMode> < /
    Provider > ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();