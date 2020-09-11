import React from 'react';
import {DocumentData} from '@firebase/firestore-types';

import TableCell from '../TableCell';

import './index.scss';

interface TableRowProps {
  info: {
    name: string,
    timetable: string[]
  },
  currentUserUid: string | undefined | null,
  staffList: {name: string}[] | DocumentData[],
  staffId: string,
}

const TableRow: React.FC<TableRowProps> = ({info, currentUserUid, staffList, staffId}) => {

  return (
    <div className="table-row">
      <div className="table-row__timetable">
        <TableCell
          cellValue={info.name}
          staffId={staffId}
          currentUserUid={currentUserUid}
          staffList={staffList}
          employee
        />
        {info.timetable.map((cell: string, i) => {
          return (
            <TableCell
              key={i + cell}
              cellValue={cell}
            />
          )
        })}
      </div>
    </div>
  )
};

export default TableRow;
