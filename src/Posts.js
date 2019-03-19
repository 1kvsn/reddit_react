import React from 'react';
import Post from './Post';
import Sidebar from './Sidebar';
import Loading from './Loading';

class Posts extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			loading: false
		}
	}

	componentDidMount = () => {
		console.log('component did mount');
		this.setState({loading: true});
		fetch("https://cors-anywhere.herokuapp.com/" + "https://www.reddit.com/r/Android/.json").then(res => res.json()).then(({data}) => this.setState({posts: data.children, loading: false}));
	}

	render() {
		return (
			<section className="main-section">
				<div className="wrapper card">
					<div className="post-container">
					{
						this.state.loading ? <Loading /> : <div>
						{
							this.state.posts.map(({data}) => <Post content = {data} />)
						}
						</div>

					}
				</div>
					<Sidebar />
				</div>
			</section>
				
						
						
		)
	}
}

export default Posts;