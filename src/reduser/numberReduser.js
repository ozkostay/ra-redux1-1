import { CHANGE_NUMBER, SET_USER_VALUE } from '../action/action';

const initialState = {
  value: 0,
  userValue: 0,
}

const numberReduser = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NUMBER:
      return {
        ...state,
        value: state.value + Number(state.userValue)
      }
    case SET_USER_VALUE:
      return {
        ...state,
        userValue: action.payload,
      }
    default:
      return state;
  }
};

export default numberReduser;
