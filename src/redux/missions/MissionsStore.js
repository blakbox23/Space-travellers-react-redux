export const GET_MISSION = 'missions/missionsStore/GET_MISSION';
const JOIN_MISSION = 'missions/missionsStore/JOIN_MISSION';

const initialState = [];

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      break;

    case GET_MISSION:
      return action.newData;

    default:
      return state;
  }
};

export default reducer;
