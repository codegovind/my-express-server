const express = require('express');
const app = express();

app.use(express.json()); // allows server to read JSON from requests

const PORT = process.env.PORT || 3000;

// Returns a single user as JSON
app.get('/user', (req, res) => {
  const user = {
    id: 1,
    name: 'Rahul',
    city: 'Solapur'
  };
  res.json(user);
});
//add new commit
// Returns a list of users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Rahul', city: 'Solapur' },
    { id: 2, name: 'Amit', city: 'Pune' },
    { id: 3, name: 'Sara', city: 'Mumbai' }
  ];
  res.json(users);
});

// Accepts JSON data and sends it back
app.post('/user', (req, res) => {
  const data = req.body;
  res.json({
    message: 'User received!',
    receivedData: data
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});