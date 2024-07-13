
import React, { useContext, useState } from 'react';
import './EditBlogs.css';
import { BlogContext } from './BlogContext';

const DeleteBlogs = () => {
  const { blogs, deleteBlogEntry} = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

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
            <h3>
              {blog.title}
            </h3>
            <p>
              {blog.content}
            </p>
            <p>
              ~{blog.name}
            </p>
            {editingIndex === blog.id ? (
              <button onClick={() => setEditingIndex(null)}>Done</button>
            ) : (
              <>
                <button onClick={() => deleteBlogEntry(blog.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteBlogs;
