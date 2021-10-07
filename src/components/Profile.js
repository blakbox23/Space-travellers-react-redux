import React from 'react';
import { useSelector } from 'react-redux';

import { Table } from 'react-bootstrap';

function Profile() {
  const rockets = useSelector((state) => state.rocketsState);
  const allRockets = rockets.filter((rocket) => rocket.reserved);

  const missions = useSelector((state) => state.missionsState);
  const myMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="flex">
      <div className="mymissions mx-5">
        <p className="fs-4">My Missions</p>
        <Table bordered hover>

          <tbody>

            {myMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>
                  {mission.mission_name}
                </td>

              </tr>
            ))}

          </tbody>
        </Table>

      </div>

      <div className="myrockets">
        <p className="fs-4">My Rockets</p>

        <Table bordered hover>

          <tbody>

            {allRockets.map((rocket) => (
              <tr key={rocket.rocket_id}>
                <td>
                  {rocket.rocket_name}
                </td>

              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Profile;
