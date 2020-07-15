// Import React (Mandatory Step). 
import React from 'react'; 

// Functional Component. 
// Used to show Question/Answer. 
const OutputScreenRow = (props) => {
  console.log('props ', props)
return ( 
	<div className="screen-row"> 
	<input type="text" readOnly value = {props.value}/> 
	</div> 
) 
} 

// Export Output Screen Row. 
export default OutputScreenRow; 
