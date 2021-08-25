const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

// state
const initialState = {
  loading: false,
  users: [],
  error: "",
};
// actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USER_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// reducers
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: actions.payload,
        error: "",
      };
      break;
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: actions.payload,
      };
      break;

    default:
      break;
  }
};

// instead of return actions object, it allows to return a function
// so it is not stable
const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // response.data is the array of users
        const users = res.data.map((user) => user.name);
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => {
        // error.message description of error
        const error = err.message;
        dispatch(fetchUsersFailure(error));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
