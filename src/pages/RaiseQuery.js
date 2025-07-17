import React, { useState } from 'react';
import '../styles/studentQueries.css'; // same CSS file

const RaiseQuery = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [queries, setQueries] = useState([]);

  const subjects = [
    'Maths', 'English', 'Science', 'History', 'Tamil', 'Computer Science'
  ]; // replace with actual dynamic subjects later

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject || !message.trim()) return;

    const newQuery = {
      id: Date.now(),
      subject,
      message,
      reply: '',
      status: 'Pending',
    };

    setQueries([newQuery, ...queries]);
    setSubject('');
    setMessage('');
  };

  return (
    <div className="query-page">
      <h2>Ask Your Doubts</h2>

      <form className="query-form" onSubmit={handleSubmit}>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          <option value="">-- Select Subject --</option>
          {subjects.map((subj, index) => (
            <option key={index} value={subj}>
              {subj}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Type your doubt or question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit Query</button>
      </form>

      <div className="query-list">
        {queries.length === 0 ? (
          <p>No queries raised yet.</p>
        ) : (
          queries.map((q) => (
            <div className="query-card" key={q.id}>
              <p><strong>Subject:</strong> {q.subject}</p>
              <p><strong>Question:</strong> {q.message}</p>
              <p><strong>Status:</strong> {q.status}</p>
              {q.reply && <p><strong>Reply:</strong> {q.reply}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RaiseQuery;
     




 
