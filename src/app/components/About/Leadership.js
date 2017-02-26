import React, { Component } from 'react';
import InfoCard from '../InfoCard/InfoCard';
import BodyLayout from '../BodyLayout';

class Leadership extends Component {
	render () {
		return (
			<div id="site-leadership">
				<section className="top-info">
					<div className="container">
						<InfoCard link="/about" id="info-about" name="About" />
						<InfoCard link="/ranks" id="info-ranks" name="Ranks" />
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

export default Leadership;
