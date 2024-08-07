import React from 'react';
import Button from '../Button';

interface TableProps {
  id: string;
  address: string;
  label: string;
}

const Table: React.FC<TableProps> = ({ id, address, label }) => {
  return (
    <div id={id} className="box">
      {label}
      <div>
        <Button address={address} text="OFF" styleClass="bt_black" color={[0, 0, 0, 32, 0, 0, 0]} />
        <Button address={address} text="Standby" styleClass="bt_red" color={[255, 0, 0, 8, 0, 0, 0]} />
        <Button address={address} text="Next" styleClass="bt_yellow" color={[0, 0, 255, 32, 1, 230, 128]} />
        <Button address={address} text="PLAY" styleClass="bt_green" color={[170, 0, 255, 32, 0, 0, 0]} />
      </div>
    </div>
  );
}

export default Table;
