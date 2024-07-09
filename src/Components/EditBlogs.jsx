// src/EditBlogs.jsx

import React, { useState } from 'react';
import './EditBlogs.css';

const EditBlogs = ({ entries, editBlogEntry}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const filteredEntries = entries.filter(entry => 
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditChange = (e, field) => {
    const updatedEntry = { ...entries[editingIndex], [field]: e.target.textContent };
    editBlogEntry(editingIndex, updatedEntry);
  };

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
            <h3
              contentEditable={editingIndex === index}
              suppressContentEditableWarning={true}
              onBlur={(e) => handleEditChange(e, 'title')}
            >
              {entry.title}
            </h3>
            <p
              contentEditable={editingIndex === index}
              suppressContentEditableWarning={true}
              onBlur={(e) => handleEditChange(e, 'content')}
            >
              {entry.content}
            </p>
            {editingIndex === index ? (
              <button onClick={() => setEditingIndex(null)}>Done</button>
            ) : (
              <>
                <button onClick={() => setEditingIndex(index)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditBlogs;
