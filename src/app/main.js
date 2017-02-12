import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Apply from './components/Apply/Apply';
import Raiding from './components/Raiding/Raiding';
import Resources from './components/Resources/Resources';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';

const Main = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<main>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/apply' component={Apply} />
					<Route path='/raiding' component={Raiding} />
					<Route path='/resources' component={Resources} />
					<Route path='/register' component={Register} />
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default Main;
