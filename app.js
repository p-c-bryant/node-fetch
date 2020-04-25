const test = require('./test.js');

const query = process.argv.slice(2);
test.get(query);
