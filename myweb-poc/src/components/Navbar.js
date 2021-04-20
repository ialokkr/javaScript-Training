import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Navbar = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Navbar = ({ match }) => (
  <div>
    <h2>Navbar</h2>
    <ul>
      <li>
      <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Registration
              </NavLink>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default Navbar;
