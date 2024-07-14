import React, { useContext, useState } from 'react';
import './EditBlogs.css';
import { BlogContext } from './BlogContext';

const EditBlogs = () => {
  const { blogs, editBlogEntry } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState({});

  const filteredEntries = blogs.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditChange = (e, field) => {
    setEditedContent({
      ...editedContent,
      [field]: e.target.textContent
    });
  };

  const handleBlur = (id) => {
    if (editingId === id) {
      const updatedEntry = { ...blogs.find(blog => blog.id === id), ...editedContent };
      editBlogEntry(id, updatedEntry);
      setEditingId(null);
    }
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
              contentEditable={editingId === blog.id}
              suppressContentEditableWarning={true}
              onInput={(e) => handleEditChange(e, 'title')}
              onBlur={() => handleBlur(blog.id)}
            >
              {blog.title}
            </h3>
            <p
              contentEditable={editingId === blog.id}
              suppressContentEditableWarning={true}
              onInput={(e) => handleEditChange(e, 'content')}
              onBlur={() => handleBlur(blog.id)}
            >
              {blog.content}
            </p>
            <p
              contentEditable={editingId === blog.id}
              suppressContentEditableWarning={true}
              onInput={(e) => handleEditChange(e, 'name')}
              onBlur={() => handleBlur(blog.id)}
            >
              ~{blog.name}
            </p>
            {editingId === blog.id ? (
              <button onClick={() => setEditingId(null)}>Done</button>
            ) : (
              <button onClick={() => {
                setEditingId(blog.id);
                setEditedContent(blog); // Initialize edited content with current blog data
              }}>
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditBlogs;
