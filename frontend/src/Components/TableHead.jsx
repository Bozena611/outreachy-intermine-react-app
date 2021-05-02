import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr className="table-row">
        <th scope="col">Gene DB Identifier</th>
        <th scope="col">Gene Symbol</th>
        <th scope="col">Homologue DB Identifier</th>
        <th scope="col">Homologue symbol</th>
        <th scope="col">Organism Short Name</th>
        <th scope="col">Data Sets Name</th>
        <th scope="col">Homologues Type</th>
      </tr>
    </thead>
  );
};

export default TableHead;
