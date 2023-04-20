import { CHANGE_NUMBER, SET_USER_VALUE } from "./action";

const changeNumber = (dispatch) => () => {
  const action = {
    type: CHANGE_NUMBER,
  };
  dispatch(action);
}

export const setUserValue = (dispatch) => (userNumber) => {
  const action = {
    type: SET_USER_VALUE,
    payload: userNumber,
  }
  dispatch(action);
}

export default changeNumber;
