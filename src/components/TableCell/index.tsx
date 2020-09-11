import React from 'react';
import {DocumentData} from '@firebase/firestore-types';

import './index.scss';

interface TableCellProps {
  cellValue: string,
  employee?: boolean,
  staffId?: string,
  currentUserUid?: string | undefined | null,
  staffList?: {name: string}[] | (DocumentData[]|{name:string}[])
}

const TableCell:React.FC<TableCellProps> = ({cellValue, currentUserUid, staffList, staffId, employee = false,}) => {

  console.log(staffList);

  const renderStaffSelect = () => {
    if (currentUserUid !== staffId) {
      return (
        <select
          name="member"
          id="member"
          defaultValue=""
        >
          <option
            value=""
            disabled
            hidden
          >
            Выбрать
          </option>
          {staffList && (staffList as Array<{name: string}>).map((employee) => <option>{employee.name}</option>)}
        </select>
      )
    }

    return 'Вы';
  };

  renderStaffSelect();

  return (
    <div className="table-cell">
      {employee ?
        renderStaffSelect() :
        <select
          name="period"
          id="period"
          onChange={(e) => console.log(e.target.value)}
          defaultValue=""
        >
          <option
            value=""
            disabled
            hidden
          >
            Выбрать
          </option>
          <option value="1">
            Первая
          </option>
          <option value="2">
            Вторая
          </option>
          <option value="3">
            Фулл
          </option>
          <option value="4">
            Прайм
          </option>
        </select>
      }
    </div>
  )
};

export default TableCell;
