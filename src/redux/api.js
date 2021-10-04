import { GET_MISSION } from './missions/MissionsStore';

const getMissions = () => async (dispatch) => {
  const data = await fetch(
    'https://api.spacexdata.com/v3/missions',
    { method: 'GET' },
  );
  const newData = await data.json();

  const formattedData = [];
  newData.forEach((item) => {
    formattedData.push({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
    });
  });
  dispatch({ type: GET_MISSION, newData });
};

export default getMissions;
