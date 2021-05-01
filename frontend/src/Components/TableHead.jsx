import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr className="table-row">
        <th scope="col">Gene.primaryIdentifier</th>
        <th scope="col">Gene.symbol</th>
        <th scope="col">Homologue.primaryIdentifier</th>
        <th scope="col">Homologue.symbol</th>
        <th scope="col">Homologue.organism.shortName</th>
        <th scope="col">Homologues.dataSets.name</th>
        <th scope="col">Homologues.type</th>
      </tr>
    </thead>
  );
};

export default TableHead;
