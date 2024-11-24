const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
