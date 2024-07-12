import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addBlogEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  const editBlogEntry = (index, updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry, i) => (i === index ? updatedEntry : entry))
    );
  };

  const deleteBlogEntry = (index) => {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  };

  return (
    <BlogContext.Provider value={{ entries, addBlogEntry, editBlogEntry, deleteBlogEntry }}>
      {children}
    </BlogContext.Provider>
  );
};
