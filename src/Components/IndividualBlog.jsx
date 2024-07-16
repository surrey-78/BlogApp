import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import './IndividualBlog.css';

const IndividualBlog = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const personBlogs = blogs.filter(blog => blog.name === id);

  return (
    <div className="individual-blog">
      <h1>Blogs by {id}</h1>
      {personBlogs.map(blog => (
        <div key={blog.id} className="blog-entry">
          <h3>{blog.title}</h3>
          {blog.image && (
            <img src={blog.image} alt={blog.title} />
          )}
          <p>{blog.content}</p>
          <h4>~{blog.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default IndividualBlog;
