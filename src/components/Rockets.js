import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { getRockets } from '../redux/api';
import { joinRocket, leaveRocket } from '../redux/rockets/RocketsStore';

const Rockets = () => {
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
      <h2>All Rockets</h2>
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
              <Button variant="primary" onClick={() => { joinMissionEvent(elem.rocket_id); }}>RESERVE ROCKET</Button>
              )}
              {elem.reserved && (
                <Button primary variant="outline-dark" onClick={() => { leaveMissionEvent(elem.rocket_id); }}>CANCEL RESERVATION</Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
