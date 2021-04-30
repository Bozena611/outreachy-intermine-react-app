import React from 'react';
import IntermineName from './IntermineName';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ListofMines = ({data}) => {
	//console.log ('names', data[0]);
	return (
		<DropdownButton id="dropdown-basic-button" title="Choose Intermine">
  		{data.map((element, i) => {
				//console.log('map', element.name);
				return <IntermineName key={i} element={element}/>
			})}
		</DropdownButton>
		
	);
};

export default ListofMines;

