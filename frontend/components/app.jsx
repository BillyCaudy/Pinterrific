import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h1>Pinterelated 🌍</h1>
      </Link>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
