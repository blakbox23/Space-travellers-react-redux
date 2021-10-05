import { GET_MISSION } from './missions/MissionsStore';
import { GET_ROCKET } from './rockets/RocketsStore';

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

const getRockets = () => async (dispatch) => {
  const data = await fetch(
    'https://api.spacexdata.com/v3/rockets',
    { method: 'GET' },
  );
  const newData = await data.json();

  const formattedData = [];
  newData.forEach((item) => {
    formattedData.push({
      rocket_id: item.rocket_id,
      rocket_name: item.rocket_name,
      description: item.description,
      image: item.flickr_images,
    });
  });
  dispatch({ type: GET_ROCKET, newData });
};

export { getMissions, getRockets };
