import React from 'react';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';


const HomePage = () => {
  return (
    <div className="jumbotron">
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
};

export default HomePage;
