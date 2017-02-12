import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import About from '../components/About/About';
import Apply from '../components/Apply/Apply';
import Raiding from '../components/Raiding/Raiding';
import Resources from '../components/Resources/Resources';
import Register from '../components/Register/Register';


const routes = () => (
	<BrowserRouter>
		<Route exact path='/' component={Home}></Route>
		<Route path='/about' component={About}></Route>
		<Route path='/apply' component={Apply}></Route>
		<Route path='/raiding' component={Raiding}></Route>
		<Route path='/resources' component={Resources}></Route>
		<Route path='/register' component={Register}></Route>
	</BrowserRouter>
)

export default routes;
