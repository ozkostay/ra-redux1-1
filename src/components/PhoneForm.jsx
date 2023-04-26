import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import setNameValue, { setPriceValue, saveValue, incrementId, editNowId, deleteValue } from '../action/phoneRepairActions';

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
    let newId = maxId + 1;
    const newRepairs = [...repairs];
    const obj = {
      id: newId,
      name: name,
      price: price,
    }
        
    if (editNow) {
      const idxForDelete = newRepairs.findIndex((item) => item.id === editNow);
      if (idxForDelete > -1) {
        newRepairs.splice(idxForDelete, 1);
      }
      obj.id = editNow;
    } else {
      incrementId(dispatch)(newId);  
    }
    newRepairs.push(obj);
    newRepairs.sort((a, b) => a.id - b.id);
    editNowId(dispatch)(null);
    saveValue(dispatch)(newRepairs);
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
    // console.log('editNow', editNow, 'state', repairs)
  }

  return (
    <>
      <form action="#">
        <input type="text" value={name} onChange={(e) => repairNameHandler(e)} />
        <input type="text"  value={price}  onChange={(e) => priceHandler(e)} />
        <button onClick={saveHandler}>Save</button>
        <button onClick={cancelHandler}>Cansel</button>
        {/* <button onClick={stateNow}>State</button> */}

      </form>
    </>
  );
}