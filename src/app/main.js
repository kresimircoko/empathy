import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Apply from './components/Apply/Apply';
import Leadership from './components/About/Leadership';
import Raiding from './components/Raiding/Raiding';
import Ranks from './components/About/Ranks';
import Resources from './components/Resources/Resources';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';

const pathName = window.location.pathname;

const Main = () => {
	if (pathName.includes('admin')) {
		return (
			<BrowserRouter>
				<div>
					<Route exact path='/admin' component={Admin} />
				</div>
			</BrowserRouter>
		)
	}
	else {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<main>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/apply' component={Apply} />
						<Route path='/leadership' component={Leadership} />
						<Route path='/raiding' component={Raiding} />
						<Route path='/ranks' component={Ranks} />
						<Route path='/resources' component={Resources} />
						<Route path='/register' component={Register} />
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default Main;
