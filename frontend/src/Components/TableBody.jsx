import React from 'react';

const TableBody = ({element}) => {
	//console.log ('element', element)

  return (
    <>
      <tbody>
        <tr>
        {element.map((item, i) => {
      		//console.log ('item', item);
          if (item===null) {
            return <td key={i}>no value</td>
          } else {
            return <td key={i}>{item}</td>
          }
        })}
        </tr>  
      </tbody>      
    </>
  );
}

export default TableBody;
