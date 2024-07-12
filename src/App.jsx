
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import BlogEntryForm from './Components/BlogEntryForm';
import BlogEntries from './Components/BlogEntries';
import EditBlogs from './Components/EditBlogs';
import DeleteBlogs from './Components/DeleteBlogs';
import './App.css';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <BlogEntryForm />
          <BlogEntries />
        </>} />
        <Route path="/edit-blogs" element={<EditBlogs />} />
        <Route path="/delete-blogs" element={<DeleteBlogs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
