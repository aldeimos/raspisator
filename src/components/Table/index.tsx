import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {useActions} from '../../hooks/bindActions';
import {userActions, userSelectors} from '../../store/user';

import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import Button from '../Button';
import LinklessButton from '../LinklessButton';

import './index.scss';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';

const Table = () => {
  const newTimetable = useSelector(userSelectors.newTimetable);
  const addSelectIsOpen = useSelector(userSelectors.addEmployeeSelect);
  const { setTimetableSettings, handleAddEmployeeSelect } = useActions(userActions);

  useEffect(() => {
    setTimetableSettings();
  }, [setTimetableSettings]);

  console.log(newTimetable);

  const handleAddEmployee = (flag: boolean) => {
    handleAddEmployeeSelect(flag)
  };

  return (
    <div className="table">
      <div className="table__head">
        <TableHeader label="Сотрудник"/>
        {newTimetable.period.map((day, i) =>
          <TableHeader
            key={i}
            label={moment(Date.now()).add(i, 'days')}/>)
        }
      </div>
      <div className="table__content">
        {Object.entries(newTimetable.staff).map((employee) => <TableRow key={employee[1]} info={employee[1]}/>)}
      </div>
      {!addSelectIsOpen ?
        <div className="table__controls">
          <Button
            handler={() => console.log('')}
            text="Создать расписание"
          />
          <LinklessButton
            handler={() => handleAddEmployee(true)}
            text="Добавить сотрудника"
          >
            <Icon28AddCircleOutline width={24} height={24}/>
          </LinklessButton>
        </div> :
        <div>kek</div>
      }
    </div>
  )
};

export default Table;
