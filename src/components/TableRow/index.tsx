import React from 'react';
import TableCell from '../TableCell';

import './index.scss';

interface TableRowProps {
  info: {
    name: string,
    timetable: string[]
  }
}

const TableRow: React.FC<TableRowProps> = ({info}) => {

  return (
    <div className="table-row">
      <div className="table-row__timetable">
        <TableCell cellValue={info.name} employee/>
        {info.timetable.map((cell: string, i) => <TableCell key={i + cell} cellValue={cell}/>)}
      </div>
    </div>
  )
};

export default TableRow;
