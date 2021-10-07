import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rocketsState);
  const allRockets = rockets.map((elem) => {
    if (elem.reserved) {
      return <li>{elem.rocket_name}</li>;
    } return null;
  });

  return (
    <ul>
      {allRockets}
    </ul>
  );
}

export default Profile;
