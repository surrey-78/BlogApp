import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import BlogEntries from './Components/BlogEntries';
import EditBlogs from './Components/EditBlogs';
import DeleteBlogs from './Components/DeleteBlogs';
import AboutUs from './Components/AboutUs';
import { AuthContext, AuthProvider } from './Components/AuthContext';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import PeopleList from './Components/PeopleList';
import IndividualBlog from './Components/IndividualBlog';
import BlogEntryForm from './Components/BlogEntryForm';
import './App.css';

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
            <div className="container">
              <div className="left-panel">
                <BlogEntries />
              </div>
              <div className="right-panel">
                <PeopleList />
              </div>
            </div>
          } />} />
          <Route path="/add-blogs" element={<ProtectedRoute element={<BlogEntryForm />} />} />
          <Route path="/edit-blogs" element={<ProtectedRoute element={<EditBlogs />} />} />
          <Route path="/delete-blogs" element={<ProtectedRoute element={<DeleteBlogs />} />} />
          <Route path="/about" element={<ProtectedRoute element={<AboutUs />} />} />
          <Route path="/blogs/:id" element={<ProtectedRoute element={<IndividualBlog />} />} />
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
