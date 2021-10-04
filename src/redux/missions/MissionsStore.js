export const GET_MISSION = 'missionsStore/missionStore/GET_MISSION';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //   case ADD_BOOK:
    //     return [...state, action.payload];

    case GET_MISSION:
      return action.newData;

      //   case REMOVE_BOOK:
      //     return state.filter((book) => book.item_id !== action.payload.item_id);

    default:
      return state;
  }
};

export default reducer;
