const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const apiRouter = require('./routes/apiRouter.js');

/* GLOBAL HANDLERS */
app.use(express.json());
app.use(cors())

/* ROUTES */
app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // serve index.html on the route '/'
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(3000);