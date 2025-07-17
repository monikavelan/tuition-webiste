import React, { useState } from 'react';
import '../styles/manageStudents.css';

const initialStudents = [
  {
    id: 1,
    name: 'Ananya R',
    email: 'ananya@example.com',
    class: '10',
    group: 'Bio-Maths',
    status: 'Paid',
    registeredAt: '2025-07-01'
  },
  {
    id: 2,
    name: 'Karthik M',
    email: 'karthik@example.com',
    class: '12',
    group: 'Commerce',
    status: 'Unpaid',
    registeredAt: '2025-06-28'
  },
  {
    id: 3,
    name: 'Deepika S',
    email: 'deepika@example.com',
    class: '9',
    group: 'General',
    status: 'Paid',
    registeredAt: '2025-07-02'
  }
];

const ManageStudents = () => {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState('');

  const togglePayment = (id) => {
    setStudents(prev =>
      prev.map(stu =>
        stu.id === id
          ? { ...stu, status: stu.status === 'Paid' ? 'Unpaid' : 'Paid' }
          : stu
      )
    );
  };

  const filteredStudents = students.filter(stu =>
    stu.name.toLowerCase().includes(search.toLowerCase()) ||
    stu.class.includes(search)
  );

  return (
    <div className="manage-students-page">
      <h2>Manage Students</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="Search by name or class..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Group</th>
            <th>Payment Status</th>
            <th>Registered At</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="7">No students found.</td>
            </tr>
          ) : (
            filteredStudents.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.name}</td>
                <td>{stu.email}</td>
                <td>{stu.class}</td>
                <td>{stu.group}</td>
                <td>
                  <span
                    className={
                      stu.status === 'Paid'
                        ? 'status paid'
                        : 'status unpaid'
                    }
                  >
                    {stu.status}
                  </span>
                </td>
                <td>{stu.registeredAt}</td>
                <td>
                  <button
                    onClick={() => togglePayment(stu.id)}
                    className="toggle-btn"
                  >
                    Mark as {stu.status === 'Paid' ? 'Unpaid' : 'Paid'}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody> */}
        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="7">No students found.</td>
            </tr>
          ) : (
            filteredStudents.map((stu) => (
              <tr key={stu.id}>
                <td data-label="Name">{stu.name}</td>
                <td data-label="Email">{stu.email}</td>
                <td data-label="Class">{stu.class}</td>
                <td data-label="Group">{stu.group}</td>
                <td data-label="Payment Status">
                  <span className={stu.status === 'Paid' ? 'status paid' : 'status unpaid'}>
                    {stu.status}
                  </span>
                </td>
                <td data-label="Registered At">{stu.registeredAt}</td>
                <td data-label="Action">
                  <button onClick={() => togglePayment(stu.id)} className="toggle-btn">
                    Mark as {stu.status === 'Paid' ? 'Unpaid' : 'Paid'}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
};

export default ManageStudents;
