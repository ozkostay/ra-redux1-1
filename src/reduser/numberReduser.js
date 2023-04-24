import { CHANGE_NUMBER, SET_USER_VALUE } from '../action/action';

const initialState = {
  value: 100,
  userValue: 0,
}

const numberReduser = (state = initialState, action) => {
  switch (action.type) {
    //Кнопка
    case CHANGE_NUMBER:
      return {
        ...state,
        value: state.value + Number(state.userValue)
      }
    // Поле
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
