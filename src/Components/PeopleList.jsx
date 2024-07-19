import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PeopleList.css';

const people = [
    { id: 1, name: 'Author 1', image: '/images/React.png' },
    { id: 2, name: 'Author 2', image: '/images/javascript.png' },
    { id: 3, name: 'Author 3', image: '/images/node.png' },
    { id: 4, name: 'Author 4', image: '/images/html.png' },
    { id: 5, name: 'Author 5', image: '/images/css.png' },
    { id: 6, name: 'Author 6', image: '/images/angular.png' },
    { id: 7, name: 'Author 7', image: '/images/vue.png' },
    { id: 8, name: 'Author 8', image: '/images/python.png' },
    { id: 9, name: 'Author 9', image: '/images/ruby.png' },
    { id: 10, name: 'Author 10', image: '/images/php.png' },
    { id: 11, name: 'Author 11', image: '/images/java.png' },
    { id: 12, name: 'Author 12', image: '/images/kotlin.png' },
    { id: 13, name: 'Author 13', image: '/images/swift.png' },
    { id: 14, name: 'Author 14', image: '/images/csharp.png' },
    { id: 15, name: 'Author 15', image: '/images/go.png' },

];

const PeopleList = () => {
  const navigate = useNavigate();

  const handlePersonClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="people-list">
      {people.map(person => (
        <div key={person.id} className="person-card" onClick={() => handlePersonClick(person.id)}>
          <img src={person.image} alt={person.name} className="person-image" />
          <span>{person.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
