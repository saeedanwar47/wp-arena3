import React, { Component } from 'react';
import axios from 'axios';

export class Posts extends Component {
  state = {
    posts: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    axios
      .get('http://localhost/wordpress/wp-json/wp/v2/posts/')
      .then((res) => this.setState({ posts: res.data, isLoaded: true }))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    const { posts, isLoaded, error } = this.state;

    if (error) {
      return <div>Error fetching posts: {error.message}</div>;
    }

    if (!isLoaded) {
      return <div>Loading posts...</div>;
    }

    return (
      <div>
        {posts.map((post) => (
          <>
            <h4>{post.title.rendered}</h4>
            <p>{post.content.rendered}</p>
          </>
        ))}
      </div>
    );
  }
}

export default Posts;
