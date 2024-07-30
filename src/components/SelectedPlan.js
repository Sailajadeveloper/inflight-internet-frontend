import React from 'react';

const SelectedPlan = ({ plan, onActivatePlan }) => {
  return (
    <div>
      <h2>Selected Plan: {plan.name}</h2>
      <button onClick={() => onActivatePlan(plan.id)}>Activate</button>
    </div>
  );
};

export default SelectedPlan;
