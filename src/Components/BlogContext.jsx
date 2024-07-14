import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    // Example blogs
    { id: 1, title: 'First Blog', content: 'This is the content of the first blog', name: 'Author 1' },
    { id: 2, title: 'Second Blog', content: 'This is the content of the second blog', name: 'Author 2' },
  ]);

  const editBlogEntry = (id, updatedEntry) => {
    setBlogs(blogs.map(blog => blog.id === id ? updatedEntry : blog));
  };

  const deleteBlogEntry = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, editBlogEntry , deleteBlogEntry}}>
      {children}
    </BlogContext.Provider>
  );
};
