import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import setNameValue, { setPriceValue, saveValue, incrementId, editNowId } from '../action/phoneRepairActions';

export default function PhoneForm() {
  const dispatch = useDispatch();
  const { maxId, name, price, editNow, repairs } = useSelector(state => state.repair);


  function repairNameHandler(event) {
    setNameValue(dispatch)(event.target.value);
  }

  function priceHandler(event) {
    setPriceValue(dispatch)(event.target.value);
  }

  function saveHandler(event) {
    const newId = (editNow) ? editNow : maxId + 1;
    const obj = {
      id: newId,
      name: name,
      price: price,
    }
    
    const newRepairs = [...repairs];
    if (editNow) {
      newRepairs.forEach(item) {
        if (item.)
      }
    } else {
      newRepairs.push(obj);
    }
        
    if (!editNow) {
      saveValue(dispatch)(newRepairs);
      incrementId(dispatch)(newId);
    } else {

    }
    
    clearForm();
  }

  function cancelHandler(event) {
    clearForm();
  }

  function clearForm() {
    setNameValue(dispatch)('');
    setPriceValue(dispatch)('');
    editNowId(dispatch)(null);
  }

  function stateNow() {
    console.log('editNow', editNow)
  }

  return (
    <>
      <form action="#">
        <input type="text" value={name} onChange={(e) => repairNameHandler(e)} />
        <input type="text"  value={price}  onChange={(e) => priceHandler(e)} />
        <button onClick={saveHandler}>Save</button>
        <button onClick={cancelHandler}>Cansel</button>
        <button onClick={stateNow}>State</button>

      </form>
    </>
  );
}