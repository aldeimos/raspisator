import React, { useEffect } from 'react';

import Header from '../../components/Header';
import Table from '../../components/Table';

import './index.scss';

const AddTimetable = () => {

  return (
    <div className="add-tt">
      <Header/>
      <div className="container">
        <Table/>
      </div>
    </div>
  )
};

export default AddTimetable;
