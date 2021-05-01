import React, { useState, useEffect } from 'react';
import DropdownList from './DropdownList';


const AllIntermines = () => {

	const [intermineList, setIntermineList] = useState([]);


	useEffect(() => {
    fetch(`https://registry.intermine.org/service/instances`)
      .then(res => res.json())
      .then(data => {
        //console.log("data", data);
        setIntermineList(data.instances);        
      });
  }, []);

	return (
		<div>
			<DropdownList data={intermineList}/>
		</div>
	)
}

export default AllIntermines;