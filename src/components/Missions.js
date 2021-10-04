import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMissions from '../redux/api';

function Missions() {
  const missions = useSelector((state) => state.missionsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Missions;
