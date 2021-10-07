export const GET_ROCKET = 'rocketsStore/rocketStore/GET_ROCKET';
export const JOIN_ROCKET = 'rocketsStore/rocketStore/JOIN_ROCKET';
export const LEAVE_ROCKET = 'rocketsStore/rocketStore/LEAVE_ROCKET';

const initialState = [];

export const joinRocket = (state, payload) => (dispatch) => {
  const newState = state.map((rocket) => {
    if (rocket.rocket_id !== payload) return rocket;
    return { ...rocket, reserved: true };
  });
  dispatch({ type: JOIN_ROCKET, payload: newState });
};

export const leaveRocket = (state, payload) => (dispatch) => {
  const newState = state.map((rocket) => {
    if (rocket.rocket_id !== payload) return rocket;
    return { ...rocket, reserved: false };
  });
  dispatch({ type: LEAVE_ROCKET, payload: newState });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return action.formattedData;

    case JOIN_ROCKET:
      return action.payload;

    case LEAVE_ROCKET:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
