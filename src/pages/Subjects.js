import React from 'react';
import '../styles/subjects.css';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaLaptopCode, FaCalculator } from 'react-icons/fa';

// Image Imports
import English from '../assets/English.jpeg';
import Tamil from '../assets/Tamil.jpeg';
import Maths from '../assets/Maths.jpeg';
import Science from '../assets/Science.jpeg';
import Social from '../assets/Social.jpeg';
import Chemistry from '../assets/Chemistry.jpeg';
import Physics from '../assets/Physics.jpeg';
import Zoology from '../assets/Zoology.jpeg';
import Botany from '../assets/Botany.jpeg';
import Economics from '../assets/Economics.jpeg';
import History from '../assets/History.jpeg';
import Geography from '../assets/Geography.jpeg';
import Hindi from '../assets/Hindi.jpeg';
import ComputerScience from '../assets/ComputerScience.jpeg';
import Accounts from '../assets/Accounts.jpeg';

const subjects = [
  { name: 'English', teacher: 'Mrs. Anjali Sharma', rating: 4.8, image: English, icon: <FaBook /> },
  { name: 'Tamil', teacher: 'Mr. Elango', rating: 4.7, image: Tamil, icon: <FaBook /> },
  { name: 'Maths', teacher: 'Mr. Arvind Krishnan', rating: 4.8, image: Maths, icon: <FaCalculator /> },
  { name: 'Science', teacher: 'Mr. Suresh Das', rating: 4.5, image: Science, icon: <FaBook /> },
  { name: 'Social', teacher: 'Mrs. Ramya V', rating: 4.6, image: Social, icon: <FaBook /> },
  { name: 'Chemistry', teacher: 'Mr. Ajay Patel', rating: 4.6, image: Chemistry, icon: <FaBook /> },
  { name: 'Physics', teacher: 'Mrs. Sheila Roy', rating: 4.7, image: Physics, icon: <FaBook /> },
  { name: 'Zoology', teacher: 'Dr. Karthika M', rating: 4.7, image: Zoology, icon: <FaBook /> },
  { name: 'Botany', teacher: 'Dr. Aruna Devi', rating: 4.8, image: Botany, icon: <FaBook /> },
  { name: 'Geography', teacher: 'Mr. Ganesh Iyer', rating: 4.6, image: Geography, icon: <FaBook /> },
  { name: 'History', teacher: 'Ms. Deepa M', rating: 4.4, image: History, icon: <FaBook /> },
  { name: 'Economics', teacher: 'Mr. Narayanan R', rating: 4.5, image: Economics, icon: <FaBook /> },
  { name: 'Hindi', teacher: 'Mr. Rajesh Kumar', rating: 4.7, image: Hindi, icon: <FaBook /> },
  { name: 'Computer Science', teacher: 'Ms. Nandhini K', rating: 4.9, image: ComputerScience, icon: <FaLaptopCode /> },
  { name: 'Accounts', teacher: 'Ms. Aishwarya D', rating: 4.6, image: Accounts, icon: <FaBook /> },
];

const Subjects = () => {
  const navigate = useNavigate();

  const handleViewDetails = (subject) => {
    // Simulated multiple teachers per subject
    const teachers = [
      {
        name: subject.teacher,
        rating: subject.rating,
        email: `${subject.name.toLowerCase().replace(/\s+/g, '')}1@example.com`
      },
      {
        name: `${subject.teacher} II`,
        rating: (subject.rating - 0.2).toFixed(1),
        email: `${subject.name.toLowerCase().replace(/\s+/g, '')}2@example.com`
      },
    ];

    navigate('/subject-details', {
      state: {
        subjectName: subject.name,
        teachers,
      },
    });
  };

  return (
    <div className="subjects-wrapper">
      <h2 className="subjects-title">Subjects</h2>
      <div className="subjects-grid">
        {subjects.map((subject, idx) => (
          <div className="subject-card" key={idx}>
            <img src={subject.image} alt={subject.name} />
            <div className="subject-info">
              <div className="subject-icon">{subject.icon}</div>

              <div className="subject-split">
                <h3>{subject.name}</h3>
                <button
                  className="details-btn"
                  onClick={() => handleViewDetails(subject)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;

