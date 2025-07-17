


import React, { useState } from 'react';
import '../styles/studentQueries.css';

const dummyQueries = [
  {
    id: 1,
    studentName: 'Rahul',
    class: '10',
    subject: 'Maths',
    question: 'I didn’t understand Pythagoras Theorem.',
    isSolved: false,
    reply: ''
  },
  {
    id: 2,
    studentName: 'Anjali',
    class: '9',
    subject: 'Science',
    question: 'Can you explain Newton’s 3rd Law?',
    isSolved: false,
    reply: ''
  }
];

const StudentQueries = () => {
  const [queries, setQueries] = useState(dummyQueries);
  const [replies, setReplies] = useState({});

  const handleReplyChange = (id, text) => {
    setReplies(prev => ({ ...prev, [id]: text }));
  };

  const handleReplySubmit = (id) => {
    const updated = queries.map(q => {
      if (q.id === id) {
        return {
          ...q,
          isSolved: true,
          reply: replies[id] || ''
        };
      }
      return q;
    });
    setQueries(updated);
    setReplies(prev => ({ ...prev, [id]: '' }));
  };

  return (
    <div className="query-page">
      <h2>Student Queries</h2>
      <div className="query-list">
        {queries.map((q) => (
          <div className="query-card" key={q.id}>
            <p><strong>Student:</strong> {q.studentName} (Class {q.class})</p>
            <p><strong>Subject:</strong> {q.subject}</p>
            <p><strong>Question:</strong> {q.question}</p>

            {q.isSolved ? (
              <div className="reply-box">
                <p><strong>Reply:</strong> {q.reply}</p>
                <p className="solved">✅ Marked as Solved</p>
              </div>
            ) : (
              <div className="reply-input">
                <textarea
                  placeholder="Write your answer here..."
                  value={replies[q.id] || ''}
                  onChange={(e) => handleReplyChange(q.id, e.target.value)}
                />
                <button onClick={() => handleReplySubmit(q.id)}>Reply</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentQueries;
