import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch message from the backend API
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello from the React Frontend!</h1>
      <p>This React app is integrated with a Node.js backend using Docker multi-stage builds.</p>
      <h2>Message from Backend:</h2>
      <p style={{ color: 'green', fontSize: '20px' }}>{message || 'Loading...'}</p>
    </div>
  );
}

export default App;
