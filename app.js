const test = require('./test.js');

const query = process.argv.slice(2).toString();
//query: 9780980200447
test.get(query);
