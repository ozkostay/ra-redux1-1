import { SET_NAME, SET_PRICE, SAVE_REPAIR, CANSEL_REPAIR, EDIT_REPAIR, DELETE_REPAIR, INCREMENT_ID} from '../action/phoneVars';



const initialState = {
  name: '',
  price: '',
  maxId: 2,
  repairs: [
    { 
      id: 1,
      name: 'Замена стекла',
      price: 2100
    },
    { 
      id: 2,
      name: 'Замена дисплея',
      price: 21000
    }
  ]
}

const phoneFormReduser = (state = initialState, action) => {
  switch (action.type) {
    // поле Name
    case SET_NAME:
      console.log('name', action.payload);
      return {
        ...state,
        name: action.payload,
      }
    // поле Price
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      }
    //Кнопка Save
    case SAVE_REPAIR:
      console.log('save', action.payload);
      return {
        ...state,
        repairs: action.payload,
      }
    //Кнопка Cansel
    case CANSEL_REPAIR:
      return {
        ...state,
        
      }
    case EDIT_REPAIR:
      return {
        ...state,
        // value: state.value + Number(state.userValue)
      }
    case DELETE_REPAIR:
      return {
        ...state,
        // value: state.value + Number(state.userValue)
      }
    case INCREMENT_ID:
      return {
        ...state,
        maxId: action.payload,
      }



      


    default:
      return state;
  }
};

export default phoneFormReduser;

