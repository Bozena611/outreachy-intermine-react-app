import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'



const IntermineName = ({element}) => {

  const [url, setUrl] = useState("");

  const getUrl = event => {
    event.preventDefault();
    setUrl(element.url);
    console.log(element.url);
  }
  //console.log(props.url);
  return (
    
      <Dropdown.Item as="button"  onClick={getUrl}>{element.name}</Dropdown.Item>
    
  );
};

export default IntermineName;