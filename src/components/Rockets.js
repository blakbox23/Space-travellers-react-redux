import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { getRockets } from '../redux/api';
import { joinRocket, leaveRocket } from '../redux/rockets/RocketsStore';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsState);

  useEffect(() => {
    if (rockets.length > 0) {
      return;
    }
    dispatch(getRockets());
  }, []);

  const joinMissionEvent = (payload) => {
    dispatch(joinRocket(rockets, payload));
  };
  const leaveMissionEvent = (payload) => {
    dispatch(leaveRocket(rockets, payload));
  };

  return (
    <section>
      {rockets.map((elem) => (
        <div key={elem.rocket_id} className="d-flex my-4">
          <div>
            <img src={elem.image[0]} alt="rocketImg" width="250" height="180" />
          </div>
          <div className="mx-4">

            <h4>{elem.rocket_name}</h4>
            {elem.reserved && (
              <Badge pill bg="primary"> Reserved </Badge>
            )}
            <h6>{elem.description}</h6>
            <div>
              {!elem.reserved && (
              <button type="button" variant="outline-dark" onClick={() => { joinMissionEvent(elem.rocket_id); }}>Join Mission</button>
              )}
              {elem.reserved && (
                <button type="button" variant="outline-dark" onClick={() => { leaveMissionEvent(elem.rocket_id); }}>Leave Mission</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Rockets;
