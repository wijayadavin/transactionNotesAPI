const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const addStore = require('./routes/stores/addStore')
const getStore = require('./routes/stores/getStore')
const addInventory = require('./routes/inventory/addInventory')
const getInventory = require('./routes/inventory/getInventory')
const addGoods = require('./routes/goods/addGoods')
const getGoods = require('./routes/goods/getGoods')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(addStore)
app.use(getStore)
app.use(addInventory)
app.use(getInventory)
app.use(addGoods)
app.use(getGoods)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
