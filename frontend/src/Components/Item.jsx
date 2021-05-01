import React from 'react';

const Item = ({element}) => {
	console.log('item', element)
	return(
  <div>
    {element.map((item, i) => {
      console.log ('item', item)
       return (
       		<div>
       			<p key={i}>Testing</p>
       		</div>
       	)
    })}
  </div>
);

}

export default Item;