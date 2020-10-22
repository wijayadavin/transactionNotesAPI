<h3>Transactions API (Backend only)</h3>

- a simple API to get transaction receipts only for registered users

<h3>Specifications:</h3>

- Modularization with MVC design pattern (without View)
- A simple database with LowDB (JSON database) consisting of Users, Products, and Transactions

<h3>Features:</h3>

- [x] A simple login system with username and password
- [x] A simple authentication & permission token with JWT
- [x] Users may only create Users & Transactions. Moreover Users may also read products and it's own transaction history
- [x] Admin users may do the CRUD on Users, Transactions and Products
- [ ] Allow multiple admins (currently only the one with username = 'admin')

