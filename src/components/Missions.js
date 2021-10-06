import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import getMissions from '../redux/api';
import { joinMission } from '../redux/missions/MissionsStore';

function Missions() {
  const missions = useSelector((state) => state.missionsState);
  const dispatch = useDispatch();

  const joinMissionEvent = (payload) => {
    dispatch(joinMission(missions, payload));
  };

  useEffect(() => {
    if (missions.length > 0) {
      return;
    }
    dispatch(getMissions());
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="170">Mission</th>
            <th width="870">Description</th>
            <th width="170"> Status </th>
            <th width="170">..</th>
          </tr>
        </thead>
        <tbody>

          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>
                {mission.mission_name}
              </td>
              <td>
                {mission.description}
              </td>
              <td>
                <Badge pill bg="secondary">
                  Secondary
                </Badge>
                {' '}
              </td>
              <td>
                <Button variant="outline-dark" onClick={() => joinMissionEvent(mission.mission_id)}>Join Mission</Button>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
