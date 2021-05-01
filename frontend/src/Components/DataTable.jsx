import React, { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";


const DataTable = () => {
  //console.log (url);

  const [minedata, setMinedata] = useState(); 
  
  useEffect(() => {
    fetch('http://localhost:4001/show')
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data[0][0]);
        setMinedata(data);        
      });
  }, []);

   //console.log('minedata', minedata) 

  
 if (minedata) {

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-dark w-auto">
        <TableHead />
        {minedata.map((element, i) => {
          //console.log ('element', element)
          return <TableBody key={i} element={element} />;
        })}
        </table>
      </div>
    );
  } else {
    return null
  }
};

export default DataTable;

