
import React, { useState } from 'react';
import './EditBlogs.css';

const DeleteBlogs = ({ entries, deleteBlogEntry }) => {
  const [searchTerm, setSearchTerm] = useState('');

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
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <button onClick={() => deleteBlogEntry(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteBlogs;
