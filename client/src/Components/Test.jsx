import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Test = ({title}) => {
	return (
		<div>
			<DropdownButton id="dropdown-item-button" title={title}>
  			<Dropdown.Item as="button">v1. no data yet</Dropdown.Item>
  		</DropdownButton>
		</div>
	)
}



export default Test;