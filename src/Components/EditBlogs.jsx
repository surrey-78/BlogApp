import React, { useContext, useState } from 'react';
import './EditBlogs.css';
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

const EditBlogs = () => {
  const { blogs, editBlogEntry } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState({});

  const filteredEntries = blogs.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditChange = (e, field) => {
    if (field === 'image') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEditedContent({
            ...editedContent,
            image: reader.result
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setEditedContent({
        ...editedContent,
        [field]: e.target.textContent
      });
    }
  };

  const handleBlur = (id) => {
    if (editingId === id) {
      const updatedEntry = { ...blogs.find(blog => blog.id === id), ...editedContent };
      editBlogEntry(id, updatedEntry);
      setEditingId(null);
    }
  };

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
        <u className='sizer'>Edit Blogs</u>
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
              {editingId === blog.id && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleEditChange(e, 'image')}
                />
              )}
              {blog.image && (
                <img src={blog.image} alt="Blog" style={{ width: '100%', borderRadius: '10px' }} />
              )}
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
                <button onClick={() => {
                  handleBlur(blog.id);
                  setEditingId(null);
                }}>Done</button>
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
      <div className="right-panel">
        <RecentBlogs />
      </div>
    </div>
  );
};

export default EditBlogs;
