import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage'; //eslint-disable-line import/no-named-as-default
import RegistrationPage from './components/registration/RegistrationPage'; //eslint-disable-line import/no-named-as-default
import {requireAdmin} from './actions/authActions';


export default function Routes(store) {


  const checkAdmin = (nextState, replace, callback) => {
    store.dispatch(requireAdmin(nextState, replace, callback));
  };

  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="layout" component={Layout}/>
      <Route path="register" component={RegistrationPage}/>
      <Route path="login" component={LoginPage}/>
    </Route>
  );
}
