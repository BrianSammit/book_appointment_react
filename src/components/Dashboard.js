import React from 'react';

const Dashboard = (props) => (
  <div>
    <div>
      <h1>Skates</h1>
      <h1>
        Status:
        {props.loggedInStatus}
      </h1>
    </div>
  </div>
);

export default Dashboard;
