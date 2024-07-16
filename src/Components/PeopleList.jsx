import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './PeopleList.css';
import { BlogContext } from './BlogContext';

const PeopleList = () => {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();
  
  const people = blogs.reduce((acc, blog) => {
    if (!acc.some(person => person.name === blog.name)) {
      acc.push({ name: blog.name, image: blog.image });
    }
    return acc;
  }, []);

  return (
    <div className="people-list">
      {people.map((person, index) => (
        <div 
          key={index} 
          className="person-card"
          onClick={() => navigate(`/blogs/${person.name}`)}
        >
          <img src={person.image} alt={person.name} className="person-image" />
          <h3>{person.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
