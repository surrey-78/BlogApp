import React, { useState, useEffect } from 'react';
import './BlogEntryForm.css';

const BlogEntryForm = ({ addBlogEntry, currentEntry }) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (currentEntry) {
      setTitle(currentEntry.title);
      setContent(currentEntry.content);
      setName(currentEntry.name);
      setImage(currentEntry.image);
    } else {
      setTitle('');
      setContent('');
      setName('');
      setImage('');
    }
  }, [currentEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && name && image) {
      addBlogEntry({ title, content, name ,image});
      setTitle('');
      setContent('');
      setName('');
      setImage('');
    }
  };
  return (
    <form className="blog-entry-form" onSubmit={handleSubmit}>
      <h2>{currentEntry ? 'Edit Blog Entry' : 'Add a Blog Entry'}</h2>
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