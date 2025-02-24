/*
   Copyright 2018 Makoto Consulting Group, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
'use strict'

/**
 * This is the DAO interface for the application.
 * You will need to provide an implementation for each
 * function in the interface. The implementation has been
 * provided for you in the appropriately named *sqlite3.js
 * file located in this directory.
 */

const sqlDao = require('./items-dao-sqlite3');
const logger = require('../utils/logger');

/**
 * Find the Item object by the specified ID
 * using the underlying implementation.
 * 
 * @param id - the ID of the item record (SQL) or document (NoSQL)
 * to locate
 */
function findById(id) {
    return sqlDao.findById(id);
}

/**
 * Find all Items objects that match the specified
 * partial description.
 * 
 * @param partialDescription - the partial description to match
 * and return items whose description contains this partial description
 */
function findByDescription(partialDescription) {
    return sqlDao.findByDescription(partialDescription);
}
/**
 * Find the Item object that matches the specified
 * UPC exactly.
 * 
 * @param upc - the UPC of the item record (SQL) or document (NoSQL)
 * to locate
 */
function findByUpc(upc) {
    return sqlDao.findByUpc(upc);
}

module.exports.findById = findById;
module.exports.findByDescription = findByDescription;
module.exports.findByUpc = findByUpc;