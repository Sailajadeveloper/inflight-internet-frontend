import React from 'react';

const ActivationDetails = ({ details }) => {
  return (
    <div>
      <h2>Activation Details</h2>
      <p>Plan ID: {details.planId}</p>
      <p>Start Time: {new Date(details.startTime).toLocaleString()}</p>
      <p>End Time: {new Date(details.endTime).toLocaleString()}</p>
      <p>Usage: {details.usage} MB</p>
      <p>Remaining Data: {details.remainingData} MB</p>
    </div>
  );
};

export default ActivationDetails;
