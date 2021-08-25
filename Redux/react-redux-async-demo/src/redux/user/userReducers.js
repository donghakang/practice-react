const {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} = require("./userTypes");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// reducers
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: actions.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: actions.payload,
      };

    default:
      return state;
  }
};

export default reducer;
