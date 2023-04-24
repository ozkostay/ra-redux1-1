import React from "react";
import PhoneRepairItem from "./PhoneRepairItem";
import { useSelector } from 'react-redux';

export default function PhoneRepairList() {
  // store
  const { repairs } = useSelector(state => state.repair);

  return (
    <div>
      <ul>
        { repairs.map((i) => <PhoneRepairItem key={i.id} item={i} />) }
      </ul>
    </div>
  );
}
