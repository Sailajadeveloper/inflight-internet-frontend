import React from 'react';

const PlanList = ({ plans, onSelectPlan }) => {
  return (
    <div>
      <h1>Inflight Internet Plans</h1>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>
            {plan.name} - ${plan.price}
            <button onClick={() => onSelectPlan(plan)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanList;
