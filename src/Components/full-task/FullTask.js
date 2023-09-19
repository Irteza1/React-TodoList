import React from 'react';
import { useLocation } from 'react-router-dom';

const FullTask = () => {
    const location = useLocation();
    const taskData = location.state;
  return (
    <div>
      <h1>{taskData?.taskName}</h1>
        <p>{taskData?.taskDescription}</p>
    </div>
  );
};

export default FullTask;