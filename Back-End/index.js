const express = require('express');
require('dotenv/config');
const categoryRoutes = require('./routes/categoryRoutes');
const articlesRoutes = require('./routes/articlesRoutes');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json('Oi');
});

app.use('/categories', categoryRoutes);
app.use('/articles', articlesRoutes);

app.use((_error, _req, res, _next) => res.status(500).json({ message: 'Something went wrong' }));

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

module.exports = app;
