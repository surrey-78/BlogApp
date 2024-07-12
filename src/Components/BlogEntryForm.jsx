import React, { useState, useContext } from 'react';
import './BlogEntryForm.css';
import { BlogContext } from './BlogContext';

const BlogEntryForm = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const { addBlogEntry } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
      addBlogEntry({ title, content, name ,image});
      setTitle('');
      setContent('');
      setName('');
      setImage('');
  };
  return (
    <form className="blog-entry-form" onSubmit={handleSubmit}>
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
        placeholder="Upload image"
        value={image}
        accept='image/*'
        onChange={(e) => setImage(e.target.value)}
        required
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