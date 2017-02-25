import React, { PropTypes, Component } from 'react';
import Progression from './Progression';
import Recruitment from './Recruitment';
import InfoCard from '../InfoCard/InfoCard';
import Post from './Post/Post';

class Home extends Component {
	render () {
		return (
			<div id="site-home">
				<section className="top-info" id="home-info">
					<div className="container">
						<InfoCard id="info-progression" name="Progression" />
						<InfoCard id="info-recruitment" name="Recruitment" />
					</div>
				</section>

				<section id="home-content">
					<div className="container">
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</div>
				</section>
			</div>
		)
	}
}

export default Home;
