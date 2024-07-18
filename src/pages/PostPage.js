import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../services/api';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  
  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default PostPage;
