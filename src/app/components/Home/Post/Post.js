import React, { Component } from 'react';

class Post extends Component {
	render () {
		return (
			<article className="home-post">
				<header className="home-post-header">
					<h3 className="home-post-title">Post Title</h3>
				</header>
				<div className="home-post-content">
					<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
				<footer className="home-post-footer">
					<span className="metadata">27.12.16.</span>
					<span className="metadata">Winterbrush</span>
					<span className="metadata">Raiding</span>
				</footer>
			</article>
		)
	}
}

export default Post;
