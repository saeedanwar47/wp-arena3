import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import Post from '../components/Post';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default HomePage;
