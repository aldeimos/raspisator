import React from 'react';
import { Link} from 'react-router-dom';

import './index.scss';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link
            to="/"
            className="navigation__link"
          >
            Ссылка 1
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/"
            className="navigation__link"
          >
            Ссылка 2
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/"
            className="navigation__link"
          >
            Ссылка 3
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;
