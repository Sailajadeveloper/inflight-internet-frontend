
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanList from './components/PlanList';
import SelectedPlan from './components/SelectedPlan';
import ActivationDetails from './components/ActivationDetails';

function App() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activationDetails, setActivationDetails] = useState({});

  useEffect(() => {
    axios.get('http://localhost:2000/api/getPlans')
    .then(response => {
      // console.log(response,"===========plans response")
      console.log('Fetched plans:', response.data.result); 
      setPlans(response.data.result.data);
    }).catch(error => console.error('Error getting plan List:', error));
  }, []);

  const activatePlan = (planId) => {
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + 1 * 60 * 60 * 1000); 
    const usage = Math.floor(Math.random() * 100);

    axios.post('http://localhost:2000/api/planActivate', { planId, startTime, endTime, usage })
      .then(response => {
        // console.log(response,"==============active response")
        setActivationDetails(response.data.result.data);
        setSelectedPlan(null);
      })
      .catch(error => console.error('Error activating plan:', error));
  };
  return (
    <div>
      <PlanList plans={plans} onSelectPlan={setSelectedPlan} />
      {selectedPlan && (
        <SelectedPlan plan={selectedPlan} onActivatePlan={activatePlan} />
      )}
      {activationDetails.planId && (
        <ActivationDetails details={activationDetails} />
      )}
    </div>
  );
}

export default App;
