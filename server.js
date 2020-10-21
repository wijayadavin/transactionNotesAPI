const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')

const addAccount = require('./routes/transactions/addTransactions')
const getAccount = require('./routes/transactions/getTransactions')
const addTransactions = require('./routes/statements/addTransactions')
const getTransactions = require('./routes/statements/getTransactions')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(addAccount)
app.use(getAccount)
app.use(addTransactions)
app.use(getTransactions)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
