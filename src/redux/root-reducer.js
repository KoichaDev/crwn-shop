/* This is the base reducer object that will represents all of the state of our application */
/* We use this code to combine all of our other states together */

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
});
