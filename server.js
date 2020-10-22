const express = require('express');
const bodyParser = require('body-parser');


// Import admin routes:
const adminCreateProductRoute =
require('./routes/admin/products/createProduct');
const adminReadProductRoute =
require('./routes/admin/products/readProduct');
const adminUpdateProductRoute =
require('./routes/admin/products/updateProduct');
const adminDeleteProductRoute =
require('./routes/admin/products/deleteProduct');
const adminCreateTransactionRoute =
require('./routes/admin/transactions/createTransaction');
const adminReadTransactionRoute =
require('./routes/admin/transactions/readTransaction');
const adminUpdateTransactionRoute =
require('./routes/admin/transactions/updateTransaction');
const adminDeleteTransactionRoute =
require('./routes/admin/transactions/deleteTransaction');
const adminReadUsersRoute =
require('./routes/admin/users/readUsers');
const adminUpdateUsersRoute =
require('./routes/admin/users/updateUsers');
const adminDeleteUsersRoute =
require('./routes/admin/users/deleteUsers');
// Import users routes:
const readProductRoute =
require('./routes/products/readProduct');
const createTransactionRoute =
require('./routes/transactions/createTransaction');
const readTransactionRoute =
require('./routes/transactions/readTransaction');
const readUsersRoute =
require('./routes/users/readUsers');
const updateUsersRoute =
require('./routes/users/updateUsers');
// Import public routes:
const rootRoute = require('./routes/root');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');


const app = express();
app.use(bodyParser.json());


// Admin routes:
app.use(adminCreateProductRoute);
app.use(adminReadProductRoute);
app.use(adminUpdateProductRoute);
app.use(adminDeleteProductRoute);
app.use(adminCreateTransactionRoute);
app.use(adminReadTransactionRoute);
app.use(adminUpdateTransactionRoute);
app.use(adminDeleteTransactionRoute);
app.use(adminReadUsersRoute);
app.use(adminUpdateUsersRoute);
app.use(adminDeleteUsersRoute);
// Users routes
app.use(readProductRoute);
app.use(createTransactionRoute);
app.use(readTransactionRoute);
app.use(readUsersRoute);
app.use(updateUsersRoute);
// Public routes
app.use(rootRoute);
app.use(signupRoute);
app.use(loginRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
});
