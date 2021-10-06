export const GET_ROCKET = 'rocketsStore/rocketStore/GET_ROCKET';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //   case ADD_BOOK:
    //     return [...state, action.payload];

    case GET_ROCKET:
      return action.newData;

      //   case REMOVE_BOOK:
      //     return state.filter((book) => book.item_id !== action.payload.item_id);

    default:
      return state;
  }
};

export default reducer;
