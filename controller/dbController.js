const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const productsModel = require('../model/productsModel');
const transactionsModel = require('../model/transactionsModel');
const usersModel = require('../model/usersModel');


let db;
(async () => {
  try {
    const fs = require('fs');
    const util = require('util');
    const readdir = util.promisify(fs.readdir);
    const path = require('path').resolve();
    const dir = await readdir(path);
    if (!dir.includes('db.json')) {
      fs.writeFile(path + 'db.json', '', () => 1);
    }

    const adapter = new FileSync('db.json');
    db = low(adapter);
    db.defaults({
      accounts: [],
      statements: [],
      transactions: [],
    })
        .write();
  } catch (error) {
    console.log(error);
  }
})();

/**
 * shapeObject - a function to shape the requested object
 * @param {Object} input
 * @param {Array} model
 * @return {Objects|null} result - return a shaped Object\
 * or null if it doesn't has enough element in comparison with the model
 */
function shapeObject(input, model) {
  const result = {};
  const modelCounter = model.length;
  let counter = 0;
  for (const namaKey in input) {
    if (model.includes(namaKey)) {
      result[namaKey] = input[namaKey];
      counter++;
    }
  }
  if (counter < modelCounter) {
    return false;
  }
  return result;
}

/**
 * Get data
 * @param {String} tableName table name
 * @param {String|Object} query - query to find
 * @return {Object} value - return the requested value
 */
function get(tableName, query) {
  if (query && Object.keys(query).length) {
    return db
        .get(tableName)
        .find(query)
        .value();
  }
  return db
      .get(tableName)
      .value();
}

/**
 * Add data
 * @param {String} tableName table name
 * @param {Object} body inserted data
 * @return {Object|false} return the shaped body as the model per se,\
 * or false if not found
 */
function add(tableName, body) {
  let shapedBody;

  if (tableName == 'products') {
    shapedBody = shapeObject(body, productsModel);
  }
  if (tableName == 'transactions') {
    shapedBody = shapeObject(body, transactionsModel);
  }
  if (tableName == 'users') {
    shapedBody = shapeObject(body, usersModel);
  }
  if (!shapedBody) {
    return false;
  }
  return db.get(tableName)
      .push(shapedBody)
      .write();
}

/**
 * Add a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 * @param {Object} body updated data
 */
function edit(tableName, id, body) {
  const parsedId = parseInt(id);
  db.get(tableName)
      .find({id: parsedId})
      .assign(body)
      .write();
}

/**
 * Remove a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function remove(tableName, id) {
  const parsedId = parseInt(id);
  db.get(tableName)
      .remove({id: parsedId})
      .write();
}

/**
 * Remove all data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function removeAll(tableName) {
  db.get(tableName)
      .remove({})
      .write();
}

module.exports = {
  get,
  add,
  edit,
  remove,
  removeAll,
};
