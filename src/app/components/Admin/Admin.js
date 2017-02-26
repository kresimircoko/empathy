import React, { Component } from 'react';
import BodyLayout from '../BodyLayout';
import InfoCard from '../InfoCard/InfoCard';

import './admin.scss';

class Admin extends Component {
	render () {
		return (
			<div id="site-admin">
				<aside id="admin-sidebar">
					<h4>Admin Options</h4>
					<ul>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" fill="#FFF"
								height="24" viewBox="0 0 24 24" width="24">
    						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    						<path d="M0 0h24v24H0z" fill="none"/>
							</svg> Add Post
						</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"
								height="24" viewBox="0 0 24 24" width="24">
						    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
							</svg> Edit Recruitment
						</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"
								height="24" viewBox="0 0 24 24" width="24">
						    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
							</svg> Edit Progression
						</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"
								height="24" viewBox="0 0 24 24" width="24">
						    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
							</svg> Edit Pages
						</li>
						<li>
							<a href="/">
								<svg xmlns="http://www.w3.org/2000/svg" fill="#333333"
									height="24" viewBox="0 0 24 24" width="24">
							    <path d="M0 0h24v24H0z" fill="none"/>
							    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
								</svg> Back to Home
							</a>
						</li>
					</ul>
				</aside>
				<div className="container">
					<h3>Admin Panel</h3>
				</div>
			</div>
		)
	}
}

export default Admin;
