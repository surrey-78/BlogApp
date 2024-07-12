
import React, { useContext, useState } from 'react';
import './EditBlogs.css';
import { BlogContext } from './BlogContext';

const DeleteBlogs = () => {
  const { entries, deleteBlogEntry} = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const filteredEntries = entries.filter(entry => 
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
        {filteredEntries.map((entry, index) => (
          <div key={index} className="blog-entry">
            <h3>
              {entry.title}
            </h3>
            <p>
              {entry.content}
            </p>
            <p>
              ~{entry.name}
            </p>
            {editingIndex === index ? (
              <button onClick={() => setEditingIndex(null)}>Done</button>
            ) : (
              <>
                <button onClick={() => deleteBlogEntry(index)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteBlogs;
