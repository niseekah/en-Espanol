import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AvatarOne from "./AvatarOne";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AccordionStyle from './AccordionStyle';
import AvatarTwo from './AvatarTwo';
import Espanol from './Espanol';
import { Link } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />

      <Switch>
        <Route path="/AvatarOne">
          <AvatarOne />
        </Route>
        <Route path="/AvatarTwo">
          <AvatarTwo />
        </Route>
        <Route path="/Espanol">
          <Espanol />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
