export const GET_MISSION = 'missions/missionsStore/GET_MISSION';
const JOIN_MISSION = 'missions/missionsStore/JOIN_MISSION';
const LEAVE_MISSION = 'missions/missionsStore/LEAVE_MISSION';

const initialState = [];

export const joinMission = (state, payload) => (dispatch) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== payload) return mission;
    return { ...mission, reserved: true };
  });
  dispatch({ type: JOIN_MISSION, payload: newState });
};

export const leaveMission = (state, payload) => (dispatch) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== payload) return mission;
    return { ...mission, reserved: false };
  });
  dispatch({ type: LEAVE_MISSION, payload: newState });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return action.payload;

    case LEAVE_MISSION:
      return action.payload;

    case GET_MISSION:
      return action.formattedData;

    default:
      return state;
  }
};

export default reducer;
