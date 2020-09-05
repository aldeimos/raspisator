import React from 'react'
import {useActions} from '../../hooks/bindActions';
import {globalsActions} from '../../store/globals';
import {RouteComponentProps, withRouter} from 'react-router';

import Button from '../Button';
import LinklessButton from '../LinklessButton';

import './index.scss';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';

const Header: React.FC<RouteComponentProps> = ({history}) => {
  const { signout } = useActions(globalsActions);

  const handleSignOut = async () => {
    await signout();
  };

  const handleRoute = () => {
    history.push('/add');
  };

  return (
    <header className="header">
      <div className="container">
        <LinklessButton
          handler={handleRoute}
          text="Добавить расписание"
        >
          <Icon28AddCircleOutline
            width={24}
            height={24}
          />
        </LinklessButton>
        <Button
          handler={handleSignOut}
          text="Выйти"
        />
      </div>
    </header>
  )
};

export default withRouter(Header);
