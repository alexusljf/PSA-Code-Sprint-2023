import React, { useState, useEffect } from 'react';
import './ResourceAllocation.css';
import cranePng from './images/crane.png';
import shipPng from './images/ship.png';
import forkliftPng from './images/forklift.png';
import pickupTruckPng from './images/pickup truck.png';
import smallTruckPng from './images/small truck.png';
import workerPng from './images/worker.png';

const ResourceAllocation = ({ portName, resourceData }) => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [aiSimulationInProgress, setAiSimulationInProgress] = useState(false);
  const [aiSimulationResult, setAiSimulationResult] = useState(null);
  const [resources, setResources] = useState(resourceData); // Maintain resource data in state

  useEffect(() => {
    // When resources change, update the UI with the new data
    setResources(resourceData);
  }, [resourceData]);

  const handleResourceClick = (resource) => {
    // Toggle the selected resource by comparing its id with the currently selected one
    setSelectedResource((prevSelectedResource) =>
      prevSelectedResource && prevSelectedResource.id === resource.id ? null : resource
    );
  };
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
    case 'jurongisland':
        displayText = 'Displaying Resource Allocation for Jurong Island Terminal';
        break;                  
    }

  const simulateAIResourceAllocation = () => {
    // Reset the AI Simulation Result
    setAiSimulationResult(null);

    // Simulate AI processing (e.g., show a loading spinner)
    setAiSimulationInProgress(true);

    // Simulate AI decisions and update resource data
    const updatedResourceData = resources.map((resource) => {
      let updatedStatus = resource.status;
      let statusChangeText = ''; // Initialize the text for status change

      if (resource.status === 'Maintenance') {
        // Simulate a chance for resources in maintenance to become available
        const shouldBecomeAvailable = Math.random() < 0.5; // Adjust the probability as needed
        if (shouldBecomeAvailable) {
          updatedStatus = 'Available';
          statusChangeText = 'Maintenance to Available';
        }
      } else if (resource.status === 'In Use') {
        // Simulate a chance for resources in use to become available
        const shouldBecomeAvailable = Math.random() < 0.3; // Adjust the probability as needed
        if (shouldBecomeAvailable) {
          updatedStatus = 'Available';
          statusChangeText = 'In Use to Available';
        }
      }

      return { ...resource, status: updatedStatus, statusChangeText };
    });

    // Simulate AI processing time (e.g., setTimeout)
    setTimeout(() => {
      // Update resource data after simulation
      setAiSimulationInProgress(false);
      setResources(updatedResourceData); // Update the resource data in state
      // Set the updated resource data in your state or wherever it's managed
      // For now, we'll just store the result
      setAiSimulationResult(updatedResourceData);
    }, 2000); // Simulate a 2-second processing time (adjust as needed)
  };

  return (
    <div className="resource-allocation-container">
      <div className="resource-header">
        <div className="centered-header">
          <h2>{displayText}</h2>
          <h2 className="displayPortplaceholder">Click on the following resources to view more details</h2>        
          <button
          className="simulate-ai-button"
          onClick={simulateAIResourceAllocation}
          disabled={aiSimulationInProgress}
        >
          {aiSimulationInProgress ? 'Running AI...' : 'AI Resource Allocation'}
        </button>
        </div>

      </div>
      <div className="resource-list">
        <ul>
          {resources.map((resource) => (
            <li
              key={resource.id}
              className={`resource-item ${
                resource.status === 'Available' ? 'available' :
                resource.status === 'In Use' ? 'in-use' :
                resource.status === 'Maintenance' ? 'maintenance' :
                ''
              }`}
              onClick={() => handleResourceClick(resource)}
            >
              <div className="resource-icon">
                <img src={getResourceIcon(resource.type)} alt={resource.type} />
              </div>
              {resource.name}
              {/* Render the details below the clicked resource if it's selected */}
              {selectedResource && selectedResource.id === resource.id && (
                <div className="resource-details">
                  <h3>Resource Details</h3>
                  <p>Name: {resource.name}</p>
                  <p>Status: {resource.status}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {aiSimulationResult && (
        <div className="popup-background">
          <div className="popup">
            <h3 class = "result">AI Re-allocation Result</h3>
            <ul>
              {aiSimulationResult.map((updatedResource) => (
                <li key={updatedResource.id}>
                  {updatedResource.name} {updatedResource.statusChangeText}
                </li>
              ))}
            </ul>
            <button onClick={() => setAiSimulationResult(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const getResourceIcon = (type) => {
  switch (type) {
    case 'Big Truck':
      return pickupTruckPng;
    case 'Small Truck':
      return smallTruckPng;
    case 'Berth':
      return shipPng;
    case 'Forklift':
      return forkliftPng;
    case 'Workers':
      return workerPng;
    case 'Crane':
      return cranePng;
    default:
      return cranePng;
  }
};

export default ResourceAllocation;
