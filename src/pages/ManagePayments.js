// import React, { useState } from 'react';
// import '../styles/managePayments.css';

// const dummyPayments = [
//   {
//     name: 'Monika V',
//     class: '10',
//     type: 'Tuition',
//     amount: 1500,
//     status: 'Paid',
//     datePaid: '2025-07-01',
//     dueDate: '2025-08-01',
//     reminderSent: false,
//   },
//   {
//     name: 'Sanjay K',
//     class: '12 Bio-Maths',
//     type: 'Explore More - Keyboard',
//     amount: 700,
//     status: 'Pending',
//     datePaid: '-',
//     dueDate: '2025-07-15',
//     reminderSent: true,
//   },
// ];

// const ManagePayments = () => {
//   const [payments, setPayments] = useState(dummyPayments);

//   const handleSendReminder = (index) => {
//     const updated = [...payments];
//     updated[index].reminderSent = true;
//     setPayments(updated);
//     alert(`Reminder sent to ${updated[index].name}`);
//   };

//   const calculateRevenue = () => {
//     return payments
//       .filter((p) => p.status === 'Paid')
//       .reduce((total, p) => total + p.amount, 0);
//   };

//   return (
//     <div className="payments-page">
//       <h2>💰 Manage Payments</h2>
//       <p className="total-revenue">Total Revenue: ₹{calculateRevenue()}</p>

//       <div className="payment-table-wrapper">
//         <table className="payment-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Class</th>
//               <th>Type</th>
//               <th>Amount</th>
//               <th>Status</th>
//               <th>Date Paid</th>
//               <th>Due Date</th>
//               <th>Reminder</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((payment, index) => (
//               <tr key={index} className={payment.status === 'Pending' ? 'pending' : 'paid'}>
//                 <td>{payment.name}</td>
//                 <td>{payment.class}</td>
//                 <td>{payment.type}</td>
//                 <td>₹{payment.amount}</td>
//                 <td>{payment.status}</td>
//                 <td>{payment.datePaid}</td>
//                 <td>{payment.dueDate}</td>
//                 <td>
//                   {payment.status === 'Pending' && !payment.reminderSent ? (
//                     <button
//                       className="reminder-btn"
//                       onClick={() => handleSendReminder(index)}
//                     >
//                       Send Reminder
//                     </button>
//                   ) : payment.reminderSent ? (
//                     <span className="reminder-sent">Sent</span>
//                   ) : (
//                     '-'
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManagePayments;





import React from 'react';
import '../styles/managePayments.css';

const payments = [
  {
    name: 'Monika V',
    class: '10',
    type: 'Tuition',
    amount: 1500,
    status: 'Paid',
    datePaid: '2025-07-01',
    dueDate: '2025-08-01',
    reminder: '-'
  },
  {
    name: 'Sanjay K',
    class: '12 Bio-Maths',
    type: 'Explore More - Keyboard',
    amount: 700,
    status: 'Pending',
    datePaid: '-',
    dueDate: '2025-07-15',
    reminder: 'Sent'
  }
];

const ManagePayments = () => {
  const totalRevenue = payments
    .filter(p => p.status === 'Paid')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="manage-payments-page">
      <h2>💰 Manage Payments</h2>
      <table className="payments-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date Paid</th>
            <th>Due Date</th>
            <th>Reminder</th>
          </tr>
        </thead>
        {/* <tbody>
          {payments.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.class}</td>
              <td>{p.type}</td>
              <td>₹{p.amount}</td>
              <td className={p.status === 'Paid' ? 'status-paid' : 'status-pending'}>{p.status}</td>
              <td>{p.datePaid}</td>
              <td>{p.dueDate}</td>
              <td>{p.reminder}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
          {payments.map((p, index) => (
            <tr key={index}>
              <td data-label="Name">{p.name}</td>
              <td data-label="Class">{p.class}</td>
              <td data-label="Type">{p.type}</td>
              <td data-label="Amount">₹{p.amount}</td>
              <td data-label="Status" className={p.status === 'Paid' ? 'status-paid' : 'status-pending'}>{p.status}</td>
              <td data-label="Date Paid">{p.datePaid}</td>
              <td data-label="Due Date">{p.dueDate}</td>
              <td data-label="Reminder">{p.reminder}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-revenue">Total Revenue: ₹{totalRevenue}</div>
    </div>
  );
};

export default ManagePayments;
