import React, { Component } from 'react';

class Register extends Component {
	render () {
		return (
			<div id="site-register">
				<div className="container">
					<form id="register">
						<h3>Site Administrator Registration</h3>

						<label htmlFor="email">Email</label>
						<input name="email" type="email" placeholder="jaina@alliance.com"/>

						<label htmlFor="username">Username</label>
						<input name="username" type="text" placeholder="jaina"/>

						<label htmlFor="password">Password</label>
						<input name="password" type="password" placeholder="iAmADreadlord"/>

						<input name="submit" value="Register" type="submit"/>
					</form>
				</div>
			</div>
		)
	}
}

export default Register;
