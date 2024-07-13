import React, { useContext } from 'react';
import './BlogEntries.css';
import { BlogContext } from './BlogContext';

const BlogEntries = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="blog-entries">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-entry">
          <h3>{blog.title}</h3>
          <h6>{blog.image}</h6>
          <p>{blog.content}</p>
          <h4>~{blog.name}</h4>
          </div>
      ))}
    </div>
  );
};

export default BlogEntries;
