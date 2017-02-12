import React, { Component } from 'react';
import {BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
	return (
		<header id="site-header">
			<div className="container">
				<img src="http://placehold.it/200x100" alt=""/>

				<nav id="site-nav">
					<Link className="site-nav-link" to="/about">About</Link>
					<Link className="site-nav-link" to="/apply">Apply</Link>
					<Link className="site-nav-link" to="/raiding">Raiding</Link>
					<Link className="site-nav-link" to="/resources">Resources</Link>
					<Link className="site-nav-link" to="/register">Register</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header;
