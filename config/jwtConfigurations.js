module.exports = {
  secret: 'shhhhhhared-secret',
  userPermission: [
    'products: read',
    'users: create',
    'transactions: create',
    'transactions: read',
  ],
  adminPermission: [
    'products: create',
    'products: read',
    'products: update',
    'products: delete',
    'users: create',
    'users: read',
    'users: update',
    'users: delete',
    'transactions: create',
    'transactions: read',
    'transactions: update',
    'transactions: delete',
    'admin: true',
  ],
};
