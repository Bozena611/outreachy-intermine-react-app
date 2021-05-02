import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';


const IntermineName = ({element}) => {

  const [name, setName] = useState("name");
  const [url, setUrl] = useState("url");
  const [show, setShow] = useState(false);


  const getUrl = event => {
    event.preventDefault();
    setName(element.name);
    setUrl(element.url);
     setShow(true);
  }
  
  useEffect(() => {
    if (show) {
      if (name === "FlyMine") {
        alert(`Data from FlyMine already shown on the screen`);
        setShow(false);
      } else {
          alert(`Data shown from FlyMine, in v2 you will be connected to ${name}: ${url}`);
          setShow(false);
        }
      }
  }, [name, url, show]);


  return (
    <>
      <div>
        <Dropdown.Item as="button" onClick={getUrl}>{element.name}</Dropdown.Item>
      </div>
    </>
  );
};

export default IntermineName;