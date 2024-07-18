import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => (
  <div>
    <h2><Link to={`/post/${post.id}`}>{post.title.rendered}</Link></h2>
    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
  </div>
);

export default Post;
