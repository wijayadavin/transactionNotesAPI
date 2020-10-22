<h2>Transactions API (Backend only)</h2>

- A simple API that let registered users to buy products
- Products are managed by Admin users only

<h3>Specifications:</h3>

- Modularization with MVC design pattern (without View)
- A simple database with LowDB (JSON database) consisting of Users, Products, and Transactions

<h3>Features:</h3>

- [x] A simple login system with username and password
- [x] A simple authentication & permission token with JWT
- [x] Users may only create Users & Transactions. Moreover, Users may also read products and its own transaction history
- [x] Admin users may do the CRUD on Users, Transactions and Products
- [ ] Allow multiple admins (currently only the one with username = 'admin')
- [ ] Add token's expiration date (currently won't be expired)

<h3>Normal Users routes:</h3>

- /root <sup>a</sup>
- /login <sup>a</sup> (will generate a new token, if username='admin', will generate a special token) 
- /signup <sup>a</sup>
- /products/readProducts <sup>b</sup>
- /transactions/createTransactions <sup>b</sup> (user's transaction only)
- /transactions/readTransactions <sup>b</sup> (user's transaction only)
- /users/readUsers <sup>b</sup> (user's account only)
- /users/updateUsers <sup>b</sup> (user's account only)

<h3>Admin routes:</h3>

- /admin/products/createProducts <sup>b</sup>
- /admin/products/readProducts <sup>b</sup>
- /admin/products/updateProducts <sup>b</sup>
- /admin/products/deleteProducts <sup>b</sup>
- /admin/transactions/createTransactions <sup>b</sup>
- /admin/transactions/readTransactions <sup>b</sup>
- /admin/transactions/updateTransactions <sup>b</sup>
- /admin/transactions/deleteTransactions <sup>b</sup>
- /admin/users/readUsers <sup>b</sup>
- /admin/users/updateUsers <sup>b</sup>

<sup>a</sup>: no token needed

<sup>b</sup>: a token is needed

<h3>Database design:</h3>
<img src="https://i.ibb.co/sJLkzqx/Screenshot-from-2020-10-23-02-57-05.png" alt="Screenshot-from-2020-10-23-02-57-05" border="0">
