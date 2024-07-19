// IndividualBlog.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import './IndividualBlog.css';

const IndividualBlog = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);

  // Find the blog by its id
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="individual-blog-container">
        <h1>Blog not found</h1>
        <p>No blog entry found with this ID.</p>
      </div>
    );
  }

  return (
    <div className="individual-blog-container">
      <div className="individual-blog">
        <h1 className="blog-title">{blog.title}</h1>
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="blog-image" />
        )}
        <p className="blog-content">{blog.content}</p>
        <h4 className="blog-author">~{blog.name}</h4>
      </div>
    </div>
  );
};

export default IndividualBlog;
