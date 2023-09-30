import React from 'react';
import './ResourceAllocation.css';

const ResourceAllocation = ({ portName }) => {
  let displayText = 'placeholder text';

  switch(portName){
    case 'tuas':
        displayText = 'Displaying Resource Allocation for Tuas Port';
        break;
    case 'pasirpanjang':
        displayText = 'Displaying Resource Allocation for Pasir Panjang Port';
        break;
    case 'brani':
        displayText = 'Displaying Resource Allocation for Brani Port';
        break; 
    case 'keppel':
        displayText = 'Displaying Resource Allocation for Keppel Port';
        break;
    case 'tanjongpagar':
        displayText = 'Displaying Resource Allocation for Tanjong Pagar Port';
        break;                  
    }

  return (
    <div className="resource-allocation-container">
      <h2 className="displayPortplaceholder">{displayText}</h2>
    </div>
  );
};

export default ResourceAllocation;
