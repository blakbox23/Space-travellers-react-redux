import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/api';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsState);

  useEffect(() => {
    if (rockets.length > 0) {
      return;
    }
    dispatch(getRockets());
  }, []);

  return (
    <section>
      {rockets.map((elem) => (
        <div key={elem.rocket_id} className="d-flex my-4">
          <div>
            <img src={elem.flickr_images[0]} alt="rocketImg" width="250" height="180" />
          </div>
          <div className="mx-4">
            <h4>{elem.rocket_name}</h4>
            <h6>{elem.description}</h6>
            <button type="button">Reserve Ticket</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Rockets;
