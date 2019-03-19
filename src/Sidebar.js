import React from 'react';

function Sidebar() {
	return (
				<div className="side-container">
					<div className="side-first side-box">
						<div className="side-header">
							<h4>Community Details</h4>
						</div>
						<span className="subreddit">
							<i className="fab fa-reddit"></i>
							<a href="https://www.reddit.com/r/Android/">r/Android</a>
						</span>
						<div className="subreddit-details">
							<span className="subreddit-count">
								<p className="counts">1.9m</p>
								<p>Subscribers</p>
							</span>
							<span className="subreddit-online">
								<p className="counts">1.6K</p>
								<p>Online</p>
							</span>
						</div>
						<div className="user-description">
							<p>Android news, reviews, tips, and discussions about rooting, tutorials, and apps. Generic discussion about phones/tablets is allowed, but technical-support and carrier-related issues should be asked in their respective subreddits!</p>
							<div className="user-button-side">
								<button className="subcreate button">Subscribe</button>
								<button className="subcreate button">Create Post</button>
							</div>
						</div>
					</div>

					<div className="side-second side-box">
						<div className="side-header">
							<h4>Content Philosophy</h4>
						</div>
						<div className="content-philosophy">
							<p>Content which benefits the community (news, rumors, and discussions) is valued over content which benefits only the individual (technical questions, help buying/selling, rants, self-promotion, etc.).
							</p>
						</div>
					</div>

					<div>
						<a href="#"><img src="https://styles.redditmedia.com/t5_2qlqh/styles/image_widget_l8h7m6apyv921.jpg?format=pjpg&amp;s=c560445a99edcb29814890cc04731775ad0eeb2d" height="300px" width="300px" /></a>
					</div>
					<div>
						<button onclick="topFunction()" id="myBtn" className="button back-top">Back to top</button>
					</div>
				</div>

	)
}
export default Sidebar;