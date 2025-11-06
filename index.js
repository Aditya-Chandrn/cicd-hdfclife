const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the MERN CI/CD pipeline!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // Export for testing