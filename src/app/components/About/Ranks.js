import React, { Component } from 'react';
import InfoCard from '../InfoCard/InfoCard';
import BodyLayout from '../BodyLayout';

class Ranks extends Component {
	render () {
		return (
			<div id="site-ranks">
				<section className="top-info">
					<div className="container">
						<InfoCard link="/about" id="info-about" name="About" />
						<InfoCard link="/leadership" id="info-leadership" name="Leadership" />
					</div>
				</section>

				<section id="home-content">
					<div className="container">
						<BodyLayout />
					</div>
				</section>
			</div>
		)
	}
}

export default Ranks;
