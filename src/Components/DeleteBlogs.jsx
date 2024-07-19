import React, { useContext, useState } from 'react';
import './EditBlogs.css'; // Reusing the same CSS file
import { BlogContext } from './BlogContext';

const RecentBlogs = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="recent-blogs">
      <h2>Recent Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-entry">
          <h3>{blog.title}</h3>
          {blog.image && (
            <img src={blog.image} alt={blog.title} style={{ width: '95%', borderRadius: '10px' }} />
          )}
          <p>{blog.content}</p>
          <h4>~{blog.name}</h4>
        </div>
      ))}
    </div>
  );
};

const DeleteBlogs = () => {
  const { blogs, deleteBlogEntry } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = blogs.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="edit-blogs-container">
      <div className="left-panel">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <u className='sizer'>Delete Blogs</u>
        <div className="blog-entries">
          {filteredEntries.map((blog) => (
            <div key={blog.id} className="blog-entry">
              <h3>{blog.title}</h3>
              {blog.image && (
                <img src={blog.image} alt="Blog" style={{ width: '100%', borderRadius: '10px' }} />
              )}
              <p>{blog.content}</p>
              <p>~{blog.name}</p>
              <button onClick={() => deleteBlogEntry(blog.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <div className="right-panel">
        <RecentBlogs />
      </div>
    </div>
  );
};

export default DeleteBlogs;
