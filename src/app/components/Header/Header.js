import React, { Component } from 'react';
import {BrowserRouter, Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
	return (
		<header id="site-header">
			<div className="container">
				<Link id="home-link" to="/"><img src="includes/logo.png" alt=""/></Link>

				<nav id="site-nav">
					<Link className="site-nav-link" to="/about">About</Link>
					<Link className="site-nav-link" to="/apply">Apply</Link>
					<Link className="site-nav-link" to="/raiding">Raiding</Link>
					<Link className="site-nav-link" to="/resources">Resources</Link>
				</nav>
				<Link id="register-link" to="/register">Register</Link>
			</div>
		</header>
	)
}

export default Header;
