import React, { useContext, useState } from 'react';
import './BlogEntries.css';
import { BlogContext } from './BlogContext';

const BlogEntries = () => {
  const { blogs } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = blogs.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-entries">
      <h1 className='color-comp'>Recent Blogs</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {filteredEntries.map((blog) => (
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

export default BlogEntries;
