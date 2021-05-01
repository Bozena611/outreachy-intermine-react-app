import React, { useState, useEffect } from "react";
import Item from './Item';


const DataTable = () => {
  //console.log (url);

  const [minedata, setMinedata] = useState(); 
  const [item, setItem] = useState();

  useEffect(() => {
    fetch('http://localhost:4001/show')
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data[0][0]);
        setMinedata(data);        
      });
  }, []);

   console.log('minedata', minedata) 

  
 if (minedata) {

  return (
    <div>
      {minedata.map((element, i) => {
        console.log ('element', element)
        return <Item key={i} element={element} />;
      })}
    </div>
  );
  } else {
    return null
  }

/*
return (
  <>
    <p>Testing</p>
  </>
  )
*/
};

export default DataTable;

