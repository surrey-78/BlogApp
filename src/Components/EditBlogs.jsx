import React, { useContext, useState } from 'react';
import './EditBlogs.css';
import { BlogContext } from './BlogContext';

const EditBlogs = () => {
  const { blogs, editBlogEntry} = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const filteredEntries = blogs.filter(entry => 
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
        {filteredEntries.map((blog) => (
          <div key={blog.id} className="blog-entry">
            <h3
              contentEditable={editingIndex === blog.id}
              suppressContentEditableWarning={true}
              onBlur={(e) => handleEditChange(e, 'title')}
            >
              {blog.title}
            </h3>
            <p
              contentEditable={editingIndex === blog.id}
              suppressContentEditableWarning={true}
              onBlur={(e) => handleEditChange(e, 'content')}
            >
              {blog.content}
            </p>
            <p
              contentEditable={editingIndex === blog.id}
              suppressContentEditableWarning={true}
              onBlur={(e) => handleEditChange(e, 'name')}
            >
              ~{blog.name}
            </p>
            {editingIndex === blog.id ? (
              <button onClick={() => setEditingIndex(null)}>Done</button>
            ) : (
              <>
                <button onClick={() => setEditingIndex(blog.id)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditBlogs;
