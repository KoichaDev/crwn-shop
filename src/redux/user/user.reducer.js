/*
 * Reducer is a function that only gets two properties.
 * 1. It gets state object that represents the last state, or an initial state
 * 2. It receives an action. That action is just an object that has a type which is a string value
 */

// Firing the state first time, will not get any results. Redux doesn't know that we have any state when the app version initialize
// Therefore, we must set an initiale state
const INITIAL_STATE = {
  currentUser: null,
};

// state = INITIAL_STATE is a ES 6 features
// This means if there is undefined, then it will fall back and leverage the INITIAL_STATE value
// ! Just remember that 'null' is considered a value
// So remember that state = INITIAL_STATE will get the "currentUser: null", which is the null value

const userReducer = (state = INITIAL_STATE, action) => {
  // type is going to be a string value
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        // getting every properties and values from the original state
        ...state,
        // in this case, we want to get the currentUser which has the action.payload value
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
