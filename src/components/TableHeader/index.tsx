import React from 'react';
import moment from 'moment';
import 'moment/locale/ru'

import './index.scss';

interface TableHeaderProps {
  label: object | string
}

const TableHeader: React.FC<TableHeaderProps> = ({ label}) => {

  return (
    <div className="table-header">
      {typeof label === 'object' ? moment(label).format('llll').split('.').slice(0, 1) : label}
    </div>
  )
};

export default TableHeader;
