import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Subjects from './pages/Subjects';
import StudentRegister from './pages/StudentRegister';
import TeacherRegister from './pages/TeacherRegister';
import Classroom from './pages/Classroom';
import Navbar from './components/Navbar';
import TeacherDetails from './pages/TeacherDetails';
import AdminRegister from './pages/AdminRegister';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Assignments from './pages/Assignments';
import ExtraClasses from './pages/ExploreMore';
import AssignWork from './pages/AssignWork';
import TakeAttendance from './pages/TakeAttendance';
import StudentQueries from './pages/StudentQueries';
import RaiseQuery from './pages/RaiseQuery';
import ManageStudents from './pages/ManageStudents';
import ManageTeachers from './pages/ManageTeachers';
import ManagePayments from './pages/ManagePayments';
import ManageSubjects from './pages/ManageSubjects';
import FeePayment from './pages/FeePayment';
import PaymentHistory from './pages/PaymentHistory';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/register/student" element={<StudentRegister />} />
          <Route path="/register/teacher" element={<TeacherRegister />} />
          <Route path="/Classroom/:subject" element={<Classroom />} />
          <Route path="/subject-details" element={<TeacherDetails />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/explore-more" element={<ExtraClasses />} />
          <Route path="/assign-work" element={<AssignWork />} />
          <Route path="/take-attendance" element={<TakeAttendance />} />
          <Route path="/student-queries" element={<StudentQueries />} />
          <Route path="/queries" element={<RaiseQuery />} />
          <Route path="/manage-students" element={<ManageStudents />} />
          <Route path="/manage-teachers" element={<ManageTeachers />} />
          <Route path="/manage-payments" element={<ManagePayments />} />
          <Route path="/manage-subjects" element={<ManageSubjects />} />
          <Route path="/fee-payment" element={<FeePayment />} />
          <Route path="/payment-history" element={<PaymentHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
