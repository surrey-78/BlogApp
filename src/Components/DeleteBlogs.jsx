import React, { useContext, useState } from 'react';
import './EditBlogs.css';
import { BlogContext } from './BlogContext';

const DeleteBlogs = () => {
  const { blogs, deleteBlogEntry } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = blogs.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="edit-blogs">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="blog-entries">
        {filteredEntries.map((blog) => (
          <div key={blog.id} className="blog-entry">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>~{blog.name}</p>
            {blog.image && (
              <img src={blog.image} alt="Blog" style={{ width: '100%', borderRadius: '10px' }} />
            )}
            <button onClick={() => deleteBlogEntry(blog.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteBlogs;
