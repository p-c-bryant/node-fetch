const fetch = require('node-fetch');

function printCatalog(catalog) {
  console.log(catalog.ISBN);
}

function get(query) {
  fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${query}&jscmd=data&format=json`)
    .then(res => res.json())
    .then(json => console.log(json));
}

module.exports.get = get;