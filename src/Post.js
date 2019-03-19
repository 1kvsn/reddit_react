import React from 'react';

class Post extends React.Component {
	constructor(props) {
		super()
	}
	render() {
		return(
			<div className="post">
				<div className="votes">
					<i className="fas fa-long-arrow-alt-up text-center"></i>
					<span className="vote-count text-center">{this.props.content.ups}</span>
					<i className="fas fa-long-arrow-alt-down text-center"></i>
				</div>
				<div className="post-content">
					<div>
						<span className="posted-by">Posted by u/{this.props.content.author}{this.props.content.created_utc}</span>
						<p className="title">{this.props.content.title}</p>
						<a href={this.props.content.url}>{this.props.content.url.substring(12, 25)}</a>
					</div>
					<div className="post-action">
						<i className="fas fa-comment-alt"></i>
						<span className="comment-number">{this.props.content.num_comments} Comments</span>
						<span><i className="fas fa-share"></i>Share</span>
						<span><i className="fas fa-bookmark"></i>Save</span>
						<i className="fas fa-ellipsis-h"></i>
					</div>
				</div>
				<div className="post-thumbnail">
					<img src={this.props.content.thumbnail} alt="" />
				</div>
			</div>
		)
	}
}

export default Post;