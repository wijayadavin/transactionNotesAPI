<h3>Transactions API (Backend only)</h3>

- A simple API that let registered users to buy products
- Products are managed by Admin users only

<h3>Specifications:</h3>

- Modularization with MVC design pattern (without View)
- A simple database with LowDB (JSON database) consisting of Users, Products, and Transactions

<h3>Features:</h3>

- [x] A simple login system with username and password
- [x] A simple authentication & permission token with JWT
- [x] Users may only create Users & Transactions. Moreover, Users may also read products and it's own transaction history
- [x] Admin users may do the CRUD on Users, Transactions and Products
- [ ] Allow multiple admins (currently only the one with username = 'admin')

<h3>Normal Users routes:</h3>

- /root
- /login
- /signup
- /products/readProducts
- /transactions/createTransactions (user's transaction only)
- /transactions/readTransactions (user's transaction only)
- /users/readUsers (user's account only)
- /users/updateUsers (user's account only)

<h3>Admin Users routes:</h3>

- /root
- /login
- /signup
- /products/createProducts
- /products/readProducts
- /products/updateProducts
- /products/deleteProducts
- /transactions/createTransactions
- /transactions/readTransactions
- /transactions/updateTransactions
- /transactions/deleteTransactions
- /users/readUsers
- /users/updateUsers
