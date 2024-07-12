import React, { useContext } from 'react';
import './BlogEntries.css';
import { BlogContext } from './BlogContext';

const BlogEntries = () => {
  const { entries } = useContext(BlogContext);
  return (
    <div className="blog-entries">
      {entries.map((entry, index) => (
        <div key={index} className="blog-entry">
          <h3>{entry.title}</h3>
          <h6>{entry.image}</h6>
          <p>{entry.content}</p>
          <h4>~{entry.name}</h4>
          </div>
      ))}
    </div>
  );
};

export default BlogEntries;
