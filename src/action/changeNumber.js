import { CHANGE_NUMBER, SET_USER_VALUE } from "./action";

// Кнопка
const changeNumber = (dispatch) => () => {
  const action = {
    type: CHANGE_NUMBER,
    // payload: 123,
  };
  dispatch(action);
}

// Поле
export const setUserValue = (dispatch) => (userNumber) => {
  const action = {
    type: SET_USER_VALUE,
    payload: userNumber,
  }
  dispatch(action);
}

export default changeNumber;
