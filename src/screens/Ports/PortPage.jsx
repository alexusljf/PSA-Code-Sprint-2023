import React from 'react';
import { useParams } from 'react-router-dom';
import './PortPage.css';
import Header from '../../components/Header/Header';
import ResourceAllocation from './ResourceAllocation';

const portData = {
    tuas: [
      { id: 1, name: 'Berth 1', status: 'Available' , type: 'Berth'},
      { id: 2, name: 'Berth 2', status: 'In Use' , type: 'Berth'},
      { id: 3, name: 'Berth 3', status: 'Available' , type: 'Berth'},
      { id: 4, name: 'Berth 4', status: 'In Use' , type: 'Berth'},
      { id: 5, name: 'Berth 5', status: 'Maintenance' , type: 'Berth'},
      { id: 6, name: 'Crane 1', status: 'Available', type : 'Crane' },
      { id: 7, name: 'Crane 2', status: 'Maintenance', type : 'Crane' },
      { id: 8, name: 'Crane 3', status: 'Maintenance', type : 'Crane' },
      { id: 9, name: 'Crane 4', status: 'In Use', type : 'Crane' },
      { id: 10, name: 'Crane 5', status: 'Available' , type: 'Crane'},
      { id: 11, name: 'Truck 1', status: 'Maintenance', type : 'Big Truck' },
      { id: 12, name: 'Truck 2', status: 'In Use', type : 'Big Truck' },
      { id: 13, name: 'Mini Truck 1', status: 'Available' , type: 'Small Truck'},
      { id: 14, name: 'Mini Truck 2', status: 'Maintenance', type : 'Small Truck' },
      { id: 15, name: 'Mini Truck 3', status: 'In Use', type : 'Small Truck' },
      { id: 16, name: 'Forklift 1', status: 'Maintenance', type : 'Forklift' },
      { id: 17, name: 'Forklift 2', status: 'In Use', type : 'Forklift' },
      { id: 18, name: 'Workers', status: '14 Available, 20 Busy' , type: 'Workers'},
      // Add more resource data for Port 1...
    ],
    jurongisland: [
      { id: 1, name: 'Berth 1', status: 'In Use', type: 'Berth' },
      { id: 2, name: 'Berth 2', status: 'Available', type: 'Berth' },
      { id: 3, name: 'Berth 3', status: 'In Use', type: 'Berth' },
      { id: 4, name: 'Berth 4', status: 'Maintenance', type: 'Berth' },
      { id: 5, name: 'Crane 1', status: 'Maintenance', type: 'Crane' },
      { id: 6, name: 'Crane 2', status: 'Available', type: 'Crane' },
      { id: 7, name: 'Crane 3', status: 'Available', type: 'Crane' },
      { id: 8, name: 'Crane 4', status: 'Maintenance', type: 'Crane' },
      { id: 9, name: 'Big Truck 1', status: 'Maintenance', type: 'Big Truck' },
      { id: 10, name: 'Big Truck 2', status: 'In Use', type: 'Big Truck' },
      { id: 11, name: 'Big Truck 3', status: 'Available', type: 'Big Truck' },
      { id: 12, name: 'Small Truck 1', status: 'Available', type: 'Small Truck' },
      { id: 13, name: 'Small Truck 2', status: 'In Use', type: 'Small Truck' },
      { id: 14, name: 'Small Truck 3', status: 'Maintenance', type: 'Small Truck' },
      { id: 15, name: 'Forklift 1', status: 'Maintenance', type: 'Forklift' },
      { id: 16, name: 'Forklift 2', status: 'Available', type: 'Forklift' },
      { id: 17, name: 'Forklift 3', status: 'Available', type: 'Forklift' },
      { id: 18, name: 'Forklift 4', status: 'Maintenance', type: 'Forklift' },
      { id: 19, name: 'Workers', status: '8 Available, 12 Busy', type: 'Workers' },
      // Add more resource data for Port 2...
    ],
    keppel: [
      { id: 1, name: 'Berth 1', status: 'Available', type: 'Berth' },
      { id: 2, name: 'Berth 2', status: 'In Use', type: 'Berth' },
      { id: 3, name: 'Berth 3', status: 'Available', type: 'Berth' },
      { id: 4, name: 'Berth 4', status: 'Maintenance', type: 'Berth' },
      { id: 5, name: 'Crane 1', status: 'Maintenance', type: 'Crane' },
      { id: 6, name: 'Crane 2', status: 'Available', type: 'Crane' },
      { id: 7, name: 'Crane 3', status: 'Maintenance', type: 'Crane' },
      { id: 8, name: 'Crane 4', status: 'Available', type: 'Crane' },
      { id: 9, name: 'Big Truck 1', status: 'Maintenance', type: 'Big Truck' },
      { id: 10, name: 'Big Truck 2', status: 'In Use', type: 'Big Truck' },
      { id: 11, name: 'Big Truck 3', status: 'Available', type: 'Big Truck' },
      { id: 12, name: 'Small Truck 1', status: 'Available', type: 'Small Truck' },
      { id: 13, name: 'Small Truck 2', status: 'In Use', type: 'Small Truck' },
      { id: 14, name: 'Small Truck 3', status: 'Maintenance', type: 'Small Truck' },
      { id: 15, name: 'Forklift 1', status: 'Maintenance', type: 'Forklift' },
      { id: 16, name: 'Forklift 2', status: 'Available', type: 'Forklift' },
      { id: 17, name: 'Forklift 3', status: 'Available', type: 'Forklift' },
      { id: 18, name: 'Forklift 4', status: 'Maintenance', type: 'Forklift' },
      { id: 19, name: 'Workers', status: '5 Available, 15 Busy', type: 'Workers' },
      // Add more resource data for Port 1...
    ],
    brani: [
      { id: 1, name: 'Berth 1', status: 'Maintenance', type: 'Berth' },
      { id: 2, name: 'Berth 2', status: 'In Use', type: 'Berth' },
      { id: 3, name: 'Berth 3', status: 'Available', type: 'Berth' },
      { id: 4, name: 'Berth 4', status: 'Maintenance', type: 'Berth' },
      { id: 5, name: 'Crane 1', status: 'Available', type: 'Crane' },
      { id: 6, name: 'Crane 2', status: 'Maintenance', type: 'Crane' },
      { id: 7, name: 'Crane 3', status: 'Available', type: 'Crane' },
      { id: 8, name: 'Crane 4', status: 'Maintenance', type: 'Crane' },
      { id: 9, name: 'Big Truck 1', status: 'In Use', type: 'Big Truck' },
      { id: 10, name: 'Big Truck 2', status: 'Maintenance', type: 'Big Truck' },
      { id: 11, name: 'Big Truck 3', status: 'Available', type: 'Big Truck' },
      { id: 12, name: 'Small Truck 1', status: 'Available', type: 'Small Truck' },
      { id: 13, name: 'Small Truck 2', status: 'In Use', type: 'Small Truck' },
      { id: 14, name: 'Small Truck 3', status: 'Maintenance', type: 'Small Truck' },
      { id: 15, name: 'Forklift 1', status: 'Maintenance', type: 'Forklift' },
      { id: 16, name: 'Forklift 2', status: 'Available', type: 'Forklift' },
      { id: 17, name: 'Forklift 3', status: 'Available', type: 'Forklift' },
      { id: 18, name: 'Forklift 4', status: 'Maintenance', type: 'Forklift' },
      { id: 19, name: 'Workers', status: '10 Available, 10 Busy', type: 'Workers' },
      // Add more resource data for Port 1...
    ],
    pasirpanjang : [
  { id: 1, name: 'Berth 1', status: 'Available', type: 'Berth' },
  { id: 2, name: 'Berth 2', status: 'In Use', type: 'Berth' },
  { id: 3, name: 'Berth 3', status: 'Maintenance', type: 'Berth' },
  { id: 4, name: 'Berth 4', status: 'Available', type: 'Berth' },
  { id: 5, name: 'Crane 1', status: 'Maintenance', type: 'Crane' },
  { id: 6, name: 'Crane 2', status: 'Available', type: 'Crane' },
  { id: 7, name: 'Crane 3', status: 'Maintenance', type: 'Crane' },
  { id: 8, name: 'Crane 4', status: 'Available', type: 'Crane' },
  { id: 9, name: 'Big Truck 1', status: 'Available', type: 'Big Truck' },
  { id: 10, name: 'Big Truck 2', status: 'In Use', type: 'Big Truck' },
  { id: 11, name: 'Big Truck 3', status: 'Maintenance', type: 'Big Truck' },
  { id: 12, name: 'Small Truck 1', status: 'Available', type: 'Small Truck' },
  { id: 13, name: 'Small Truck 2', status: 'In Use', type: 'Small Truck' },
  { id: 14, name: 'Small Truck 3', status: 'Maintenance', type: 'Small Truck' },
  { id: 15, name: 'Forklift 1', status: 'Maintenance', type: 'Forklift' },
  { id: 16, name: 'Forklift 2', status: 'Available', type: 'Forklift' },
  { id: 17, name: 'Forklift 3', status: 'Available', type: 'Forklift' },
  { id: 18, name: 'Forklift 4', status: 'Maintenance', type: 'Forklift' },
  { id: 19, name: 'Workers', status: '12 Available, 8 Busy', type: 'Workers' },
  // Add more resource data for Pasir Panjang...
  ]
    // Add data for Port 3, Port 4, Port 5...
  };
const PortPage = () => { // Receive portName as a prop
  const { portName } = useParams(); 
  console.log({ portName });
  return (
    <div className = 'portPage'>
      <Header />
      <ResourceAllocation portName={portName} resourceData={portData[portName.toLowerCase()]} />
    </div>
  );
};

export default PortPage;
