import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
//import DataTable from './DataTable';


const IntermineName = ({element}) => {

  const [url, setUrl] = useState("");

  const getUrl = event => {
    event.preventDefault();
    setUrl(element.url);
    console.log(element.url);
    alert(`Data shown from FlyMine, in v2 you will be connected to ${url}`)
  }

   
  return (
    <>
      <div>
        <Dropdown.Item as="button"  onClick={getUrl}>{element.name}</Dropdown.Item>
      </div>
     {/* {url ? 
     <DataTable url={url} /> : <h1>Please choose one Intermine</h1>
      }*/}
    </>
  );
};

export default IntermineName;