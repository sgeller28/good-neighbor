/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../styles/login.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NewPost from '../containers/newPost';
import Login from '../containers/login';
import NavBar from './navBar';

const App = (props) => {
  return (
    <Router>
      <NavBar />
      <div id="postsDivs">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/posts/new" component={NewPost} />
          <Route render={() => <div>post not found </div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
