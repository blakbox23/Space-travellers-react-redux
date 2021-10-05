/* eslint react/prop-types: 0 */

import React from 'react';

function Missionitem({ mission }) {
  return (
    <div>
      <p>{mission.mission_name}</p>
    </div>
  );
}

export default Missionitem;
