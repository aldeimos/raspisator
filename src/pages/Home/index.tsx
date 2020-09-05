import React, {useContext, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useActions} from '../../hooks/bindActions';
import {userActions, userSelectors} from '../../store/user';
import {AuthContext} from '../../context/AuthContext';

import Header from '../../components/Header';
import TimetableItem from '../../components/TimetablesItem';

const Home: React.FC = () => {
  const { currentUser } = useContext<any>(AuthContext);
  const { getUserSchedules } = useActions(userActions);
  const timetables = useSelector(userSelectors.timetables);

  useEffect(() => {
    (async () => {
      await getUserSchedules(currentUser.uid);
    })()
  }, [currentUser, getUserSchedules]);

  return (
    <>
      <Header/>
      <div className="container">
        {timetables ?
          <TimetableItem/> :
          <h3 className="title">Список расписаний пуст</h3>
        }
      </div>
    </>
  )
};

export default Home;
