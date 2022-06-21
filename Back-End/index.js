const express = require('express');
const categoryRoutes = require('./routes/categoryRoutes');
require('dotenv/config');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json('Oi');
});

app.use('/categories', categoryRoutes);
// app.use('/login', loginRoutes);

app.use((_error, _req, res, _next) => res.status(500).json({ message: 'Something went wrong' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

module.exports = app;
