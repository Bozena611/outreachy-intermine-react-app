const express = require("express");
const app = express();

const port = 4001;



// Find and print all the exons associated with eve in D. melanogaster
 
// If running in node.js, the following line will be necessary:
var intermine = require('imjs');
//var imtables = require('im-tables');
 
var flymine   = new intermine.Service({root: 'https://www.flymine.org/flymine'});

/*var query = {
  from: 'Gene',
  select: ['*']
};*/


/*var query = {
  "description": "Find all genes that are associated with a particular  GO term in a specific organism. This template will return genes that have been assigned the given GO term as well as genes that have a more specific GO term.",
  "where": [
    {
      "path": "Gene.goAnnotation.ontologyTerm.parents",
      "type": "GOTerm"
    },
    {
      "path": "Gene.goAnnotation.ontologyTerm",
      "type": "GOTerm"
    },
    {
      "path": "Gene.goAnnotation.ontologyTerm.parents.name",
      "op": "=",
      "code": "A",
      "editable": true,
      "switchable": false,
      "switched": "LOCKED",
      "value": "DNA binding"
    },
    {
      "path": "Gene.organism.name",
      "op": "=",
      "code": "B",
      "editable": true,
      "switchable": false,
      "switched": "LOCKED",
      "value": "Drosophila melanogaster"
    }
  ],
  "name": "GO_Gene",
  "title": "GO term name [and children of this term] --> Genes in one specific organism",
  "from": "Gene",
  "select": [
    "Gene.secondaryIdentifier",
    "Gene.symbol",
    "Gene.goAnnotation.ontologyTerm.parents.name",
    "Gene.goAnnotation.ontologyTerm.parents.identifier",
    "Gene.goAnnotation.ontologyTerm.name",
    "Gene.goAnnotation.ontologyTerm.identifier"
  ],
  "sortOrder": [
    {
      "path": "Gene.secondaryIdentifier",
      "direction": "ASC"
    }
  ],
  "constraintLogic": "A and B"
}
*/

var query     = {
  from: 'Gene',
  select: [
    'exons.symbol',
    'chromosome.primaryIdentifier',
    'exons.chromosomeLocation.start',
    'exons.chromosomeLocation.end'
  ],
  where: {
    symbol: 'eve',
    organism: {lookup: 'D. melanogaster'}}
};


flymine.rows(query).then(function(rows) {
  console.log("No. of exons: " + rows.length);
  rows.forEach(function printRow(row) {
    console.log('test', "[" + row[0] + "] " + row[1] + ":" + row[2] + ".." + row[3]);
    console.log ('row', row);
  });
});

app.get("/", function (request, response) {
  response.send(query);
});






app.listen (port, () => {
	console.log (`server is running on port ${port}`)
});