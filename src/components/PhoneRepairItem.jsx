import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import setNameValue, { setPriceValue } from '../action/phoneRepairActions';

export default function PhoneRepairItem({item}) {
  // store
  const dispatch = useDispatch();
  const { repairs } = useSelector(state => state.repair);


  //editHandler

  //deleteHandler
  function deleteHandler() {
    // find ID
    // const delID =
    // del ID
  }


  return (
    <>
      <li>
        {item.name} {item.price} 
        <button dataId ={item.id}>E</button>
        <button>D</button>
      </li>
    </>
  );
}
