import React, { useState, useEffect } from 'react';
import DropdownList from './DropdownList';
import DataTable from './DataTable';

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
			<h1>Test</h1>
			<DropdownList data={intermineList}/>
			<DataTable />
		</div>
	)
}

export default AllIntermines;