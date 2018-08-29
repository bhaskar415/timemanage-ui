import React from 'react';

const task = (props) => {
	return (
		<tr> 
		 <td>{props.key} </td>
		 <td>{props.children}</td>
                 <td><button onClick={props.deleteEvent}>Delete</td>
		</tr>
	)

}

export default task
