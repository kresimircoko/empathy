import React, { Component, PropTypes } from 'react';

class InfoCard extends Component {
	constructor (props) {
		super(props);
		state : {
			buttons: true
		}
	}
	
	render (props) {
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
}

export default InfoCard;
