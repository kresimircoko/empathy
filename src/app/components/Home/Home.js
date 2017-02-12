import React, { PropTypes, Component } from 'react';
import Progression from './Progression';
import Recruitment from './Recruitment';
import Post from './Post/Post';

class Home extends Component {
	render () {
		return (
			<div id="site-home">
				<section id="home-info">
					<div className="container">
						<Progression />
						<Recruitment />
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
