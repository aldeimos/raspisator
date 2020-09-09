import React, {ChangeEvent} from 'react';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader';
import {useActions} from '../../hooks/bindActions';
import {userActions, userSelectors} from '../../store/user';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';

import './index.scss';

const AddEmployee: React.FC = () => {
  const newEmployee = useSelector(userSelectors.newEmployee);
  const isLoading = useSelector(userSelectors.isLoading);
  const errorMessage = useSelector(userSelectors.errorMessage);
  const { setNewEmployee, addNewEmployee } = useActions(userActions);

  const handleAdd = () => {
    addNewEmployee();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmployee(e.target.name, e.target.value);
  };

  console.log(newEmployee);

  return (
    <>
      <Header/>
      <section className="add-ee">
        <div className="container">
          <div className="add-ee__form">
            <Input
              id="name"
              value={newEmployee.name}
              type="name"
              name="name"
              label="Имя Фамилия"
              handler={handleChange}
            />
            <Input
              id="email"
              value={newEmployee.email}
              type="email"
              name="email"
              label="Почта"
              handler={handleChange}
            />
            <Input
              id="password"
              value={newEmployee.password}
              type="password"
              name="password"
              label="Пароль для входа"
              handler={handleChange}
            />
            {
              errorMessage &&
                <div className="add-ee__form-error">
                  {errorMessage}
                </div>
            }
            <Button
              handler={handleAdd}
              text="Добавить сотрудника"
            />
          </div>
        </div>
        {isLoading && <Loader/>}
      </section>
    </>
  )
};

export default AddEmployee;
