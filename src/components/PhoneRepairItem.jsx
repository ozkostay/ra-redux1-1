import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import setNameValue, { setPriceValue, deleteValue, editValue, editNowId } from '../action/phoneRepairActions';


export default function PhoneRepairItem({item}) {
  // store
  const dispatch = useDispatch();
  const { editNow, name, price, repairs } = useSelector(state => state.repair);
  

  function editHandler(id) {
    console.log()
    setNameValue(dispatch)(item.name);
    setPriceValue(dispatch)(item.price);
    editNowId(dispatch)(item.id);
    // const tempRepairs = [...repairs]
    // tempRepairs.forEach((i) => {
    //   if (i.id === id) {
    //     i.isEdit = true;
    //   }
    // });
    // editValue(dispatch)(tempRepairs);
  }
  
  //deleteHandler
  function deleteHandler(id) {
    deleteValue(dispatch)(id);
    // const delID =
    // del ID
  }

  

  return (
    <>
      <li>
        {item.name} {item.price} 
        <button onClick={() => editHandler(item.id)}>E</button>
        <button onClick={() => deleteHandler(item.id)}>D</button>
      </li>
    </>
  );
}
