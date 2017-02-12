import ReactRouter, { Link } from 'react-router';
import React, { PropTypes } from 'react';

import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Apply from '../Apply/Apply';
import Raiding from '../Raiding/Raiding';
import Resources from '../Resources/Resources';
import Register from '../Register/Register';

export default class Header extends React.Component {
	render() {
		return (
			<header id="site-header">
				<container>
					<h1>Empathy</h1>
					<nav id="site-nav">
						<Link to="/about">About</Link>
						<Link to="/apply">Apply</Link>
						<Link to="/raiding">Raiding</Link>
						<Link to="/resources">Resources</Link>
						<Link to="/register">Register</Link>
					</nav>
				</container>
			</header>
		)
	}
};
