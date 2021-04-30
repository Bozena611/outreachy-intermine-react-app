import React from 'react';
import IntermineName from './IntermineName';

const ListofMines = ({data}) => {
	console.log ('names', data[0]);
	return (
		<div>
		{data.map((element, i) => {
			console.log('map', element.name);
			return <IntermineName key={i} element={element}/>
		})}
			
		</div>
	);
};

export default ListofMines;