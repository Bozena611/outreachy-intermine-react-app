import React, { useState, useEffect } from 'react';
import ListofMines from './ListofMines';
import DataTable from './DataTable';

const Intermines = () => {

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
			<ListofMines data={intermineList}/>
			<DataTable/>
		</div>
	)
}

export default Intermines;