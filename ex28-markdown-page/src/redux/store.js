import { configureStore } from "@reduxjs/toolkit";

import textReducer from "./slice";


export default configureStore({
  reducer: {
    text: textReducer,
  },
});
