const express = require('express');
const bodyParser = require('body-parser');
const rootRoute = require('./routes/root');

const signup = require('./routes/signup');
const login = require('./routes/login');

const app = express();

app.use(bodyParser.json());
app.use(rootRoute);
app.use(signup);
app.use(login);


const port = 3000;
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
});
