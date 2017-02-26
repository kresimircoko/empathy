import React, { Component, PropTypes } from 'react';
import InfoCard from '../InfoCard/InfoCard';
import BodyLayout from '../BodyLayout';
// import ApplicationTemplate from './ApplicationTemplate';

class Apply extends Component {
	render () {
		return (
			<div id="site-apply">
				<section className="top-info" id="about-info">
					<div className="container">
						<InfoCard buttons="true" id="info-benevolence" name="Benevolence" />
						<InfoCard buttons="true" id="info-calamity" name="Calamity" />
					</div>
				</section>
				<div className="container">
					<BodyLayout />
				</div>
			</div>
		)
	}
}

export default Apply;
