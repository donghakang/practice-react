import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';

// STORE
// initial setup for redux toolkit
// Pass to Top level component (index.js) to give every component access 
// to any variable store in redux
export default configureStore({
    reducer: {counter: counterReducer}
})
