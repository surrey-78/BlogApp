import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import BlogEntryForm from './Components/BlogEntryForm';
import BlogEntries from './Components/BlogEntries';
import EditBlogs from './Components/EditBlogs';
import DeleteBlogs from './Components/DeleteBlogs';
import './App.css';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import { AuthContext, AuthProvider } from './Components/AuthContext';
import Login from './Components/login';
import Signup from './Components/SignUp';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppWrapper = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="app-wrapper">
      {!isAuthPage && <Header />}
      <div className="content-wrapper">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoute element={
            <div className="panels-wrapper">
              <div className="left-panel">
                <h1>Add Your Blogs</h1>
                <BlogEntryForm />
              </div>
              <div className="right-panel">
                <BlogEntries />
              </div>
            </div>
          } />} />
          <Route path="/edit-blogs" element={<ProtectedRoute element={<EditBlogs />} />} />
          <Route path="/delete-blogs" element={<ProtectedRoute element={<DeleteBlogs />} />} />
          <Route path="/about" element={<ProtectedRoute element={<AboutUs />} />} />
          <Route path="/contact" element={<ProtectedRoute element={<ContactUs />} />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
}

export default App;
