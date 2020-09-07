import React from 'react';

import './index.scss';

interface TableCellProps {
  cellValue: string,
  employee?: boolean
}

const TableCell:React.FC<TableCellProps> = ({cellValue, employee = false}) => {
  return (
    <div className="table-cell">
      {employee ?
        cellValue :
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
