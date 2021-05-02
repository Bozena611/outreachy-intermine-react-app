import React from 'react';
import IntermineName from './IntermineName';
import DropdownButton from 'react-bootstrap/DropdownButton';


const DropdownList = ({data}) => {
	//console.log ('names', data[0]);
	 
	return (
		<>
			<DropdownButton id="dropdown-basic-button"  title="Choose Intermine">
  			<div className="side-scroll">
  			{data.map((element, i) => {
					//console.log('map', element.name);
					return <IntermineName key={i} element={element}/>
				})}
				</div>
			</DropdownButton>
		</>
	);
};

export default DropdownList;

