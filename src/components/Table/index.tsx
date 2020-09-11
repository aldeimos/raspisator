import React, { useEffect } from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {useActions} from '../../hooks/bindActions';
import {globalsSelectors} from '../../store/globals';
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
  const staff = useSelector(userSelectors.staff);
  const currentUser = useSelector(globalsSelectors.currentUser);
  const { getStaff, setTimetableSettings, handleAddEmployee } = useActions(userActions);

  useEffect(() => {
    setTimetableSettings();
    getStaff();
  }, [getStaff, setTimetableSettings]);

  console.log(newTimetable);

  const handleAddStaff = () => {
    handleAddEmployee()
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
        {Object.entries(newTimetable.staff).map((employee) => {
          return (
            <TableRow
              key={employee[0]}
              info={employee[1]}
              currentUserUid={currentUser && currentUser.uid}
              staffList={staff && staff}
              staffId={employee[0]}
            />
          )
        })}
      </div>
      {!addSelectIsOpen ?
        <div className="table__controls">
          <Button
            handler={() => console.log('')}
            text="Создать расписание"
          />
          <LinklessButton
            handler={() => handleAddStaff()}
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
