const express = require("express");
const cors = require('cors')
const app = express();

const port = 4001;

app.use(cors())

// Find and print all the exons associated with eve in D. melanogaster
 
// If running in node.js, the following line will be necessary:
var intermine = require('imjs');
//var imtables = require('im-tables');
 
var flymine   = new intermine.Service({root: 'https://www.flymine.org/flymine'});

var query = {
  "description": "For a given Gene (or List of Genes) in named organism (default: D. melanogaster) returns the orthologues.  Optionally constrain the organism for which orthologues are shown and the data source from which the orthologue predictions are derived.  Currently  orthologue predictions are available from TreeFam, Panther and the Drosophila 12 genomes project. [keywords: homologue, homolog, paralogue, paralogue, ortholog]",
  "where": [
    {
      "path": "Gene",
      "op": "LOOKUP",
      "code": "A",
      "editable": true,
      "switchable": false,
      "switched": "LOCKED",
      "value": "cdk1",
      "extraValue": "D. melanogaster"
    }
  ],
  "name": "Gene_Orth",
  "title": "Gene --> Orthologues",
  "from": "Gene",
  "select": [
    "Gene.primaryIdentifier",
    "Gene.symbol",
    "Gene.homologues.homologue.primaryIdentifier",
    "Gene.homologues.homologue.symbol",
    "Gene.homologues.homologue.organism.shortName",
    "Gene.homologues.dataSets.name",
    "Gene.homologues.type"
  ],
  "sortOrder": [
    {
      "path": "Gene.symbol",
      "direction": "ASC"
    }
  ],
  "constraintLogic": "A and B and C"
}



app.get("/show", function (req, res) {
  flymine.rows(query).then(function(rows) {
  console.log("No. of exons: " + rows.length);
    rows.map(function printRow(row) {
      //console.log('test', "[" + row[0] + "] " + row[1] + ":" + row[2] + ".." + row[3]);
      console.log('row', rows)
      res.send(rows);
    });
  });
});



app.listen (port, () => {
	console.log (`server is running on port ${port}`)
});