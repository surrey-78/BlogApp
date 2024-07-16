import React, { useState, useContext, useRef } from 'react';
import './BlogEntryForm.css';
import { BlogContext } from './BlogContext';

const BlogEntryForm = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const { addBlog } = useContext(BlogContext);
  const fileInputRef = useRef(null); // Reference for the file input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !name) return;
    addBlog({ title, content, name, image });
    setTitle('');
    setContent('');
    setName('');
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form className="blog-entry-form" onSubmit={handleSubmit}>
      <h1>Add Your Blogs</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Blogger Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef} // Assign the ref to the file input
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Blog Entry</button>
    </form>
  );
};

export default BlogEntryForm;
