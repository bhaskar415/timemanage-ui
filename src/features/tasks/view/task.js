import React from 'react';

const task = (props) => {
	return (
		<tr> 
		 <td>{props.children}</td>
                 <td><button onClick={props.deleteEvent}>Delete</button></td>
		</tr>
	)

}

export default task
