import React, { useState, useEffect } from 'react';
import './BlogEntryForm.css';

const BlogEntryForm = ({ addBlogEntry, currentEntry }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentEntry) {
      setTitle(currentEntry.title);
      setContent(currentEntry.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [currentEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addBlogEntry({ title, content });
      setTitle('');
      setContent('');
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
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">{currentEntry ? 'Update Blog Entry' : 'Add Blog Entry'}</button>
    </form>
  );
};

export default BlogEntryForm;