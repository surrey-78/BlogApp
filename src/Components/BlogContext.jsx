import React, { createContext, useEffect, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

useEffect(() => {
  const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
  setBlogs(storedBlogs);
}, []);

useEffect(() => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}, [blogs]);

const addBlog = (blog) => {
  const newBlog = { ...blog, id: new Date().getTime().toString() };
  setBlogs([...blogs, newBlog]);
};

const editBlog = (id, updatedBlog) => {
  const updatedBlogs = blogs.map((blog) => (blog.id === id ? updatedBlog : blog));
  setBlogs(updatedBlogs);
};

  const deleteBlogEntry = (index) => {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, editBlog, deleteBlogEntry }}>
      {children}
    </BlogContext.Provider>
  );
};
