import React, { Component } from 'react';
import BodyLayout from '../BodyLayout';
import InfoCard from '../InfoCard/InfoCard';

class About extends Component {
	render () {
		return (
			<div id="site-about">
				<section className="top-info" id="about-info">
					<div className="container">
						<InfoCard id="info-leadership" link="/leadership" name="Leadership" />
						<InfoCard id="info-ranks" link="/ranks" name="Ranks" />
					</div>
				</section>

				<div className="container">
					<BodyLayout />
				</div>
			</div>
		)
	}
}

export default About;
