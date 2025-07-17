// // import React from 'react';
// // import '../styles/dashboard.css';

// // const StudentDashboard = () => {
// //   return (
// //     <div className="dashboard">
// //       <h2>Dashboard</h2>
// //       <p>Welcome, Student!</p>

// //       <div className="dashboard-cards">
// //         <div className="card">My Subjects</div>
// //         <div className="card">Assignments</div>
// //         <div className="card">Payment History</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentDashboard;






// import React from 'react';
// import '../styles/dashboard.css';
// import { useNavigate } from 'react-router-dom';

// const StudentDashboard = () => {
//   const navigate = useNavigate();

//   const handleSubjectClick = () => {
//     navigate('/subjects');
//   };

//   return (
//     <div className="dashboard">
//       <h2>Dashboard</h2>
//       <p>Welcome, Student!</p>

//       <div className="dashboard-cards">
//         <div className="card" onClick={handleSubjectClick} style={{ cursor: 'pointer' }}>
//           My Subjects
//         </div>
//         <div className="card" onClick={() => navigate('/assignments')}>Assignments</div>
//         <div className="card">Payment History</div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;









import React from 'react';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, Student!</p>

      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate('/subjects')} style={{ cursor: 'pointer' }}>
          My Subjects
        </div>
        <div className="card" onClick={() => navigate('/assignments')}>Assignments</div>
        <div className="card" onClick={() => navigate('/queries')}>My Queries</div>
        <div className="card">Payment History</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
