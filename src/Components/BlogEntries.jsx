import React from 'react';
import './BlogEntries.css';

const BlogEntries = ({ entries}) => {
  return (
    <div className="blog-entries">
      {entries.map((entry, index) => (
        <div key={index} className="blog-entry">
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
          <h4>~{entry.name}</h4>
          </div>
      ))}
    </div>
  );
};

export default BlogEntries;
