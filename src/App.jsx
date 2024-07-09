
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import BlogEntryForm from './Components/BlogEntryForm';
import BlogEntries from './Components/BlogEntries';
import EditBlogs from './Components/EditBlogs';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);

  const addBlogEntry = (entry) => {
    if (currentEntry) {
      setEntries(entries.map((item, index) => (index === currentEntry.index ? entry : item)));
      setCurrentEntry(null);
    } else {
      setEntries([...entries, entry]);
    }
  };

  const editBlogEntry = (index) => {
    setCurrentEntry({ ...entries[index], index });
  };

  const deleteBlogEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <BlogEntryForm addBlogEntry={addBlogEntry} currentEntry={currentEntry} />
          <BlogEntries entries={entries} editBlogEntry={editBlogEntry} deleteBlogEntry={deleteBlogEntry} />
        </>} />
        <Route path="/edit-blogs" element={<EditBlogs entries={entries} editBlogEntry={editBlogEntry} deleteBlogEntry={deleteBlogEntry} />} />
      </Routes>
    </Router>
  );
}

export default App;
