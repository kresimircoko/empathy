import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class InfoCard extends Component {
	constructor(props) {
		super(props);
		state: {
			buttons: true
		}
	}

	render(props) {
		if (this.props.buttons) {
			return (
				<section id={this.props.id}>
					<h3>{this.props.name}</h3>
					<footer className="info-footer">
						<button>About</button>
						<button>Apply</button>
					</footer>
				</section>
			)
		}
		else if (this.props.link) {
			return (
				<Link id={this.props.id} to={this.props.link}>
					<section>
						<h3>{this.props.name}</h3>
					</section>
				</Link>
			)
		}
		else {
			return (
				<section id={this.props.id}>
					<h3>{this.props.name}</h3>
				</section>
			)
		}

	}
}

export default InfoCard;
