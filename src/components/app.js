/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../styles/style.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NewPost from '../containers/newPost';
import Home from '../containers/Home';
import NavBar from './navBar';

const App = (props) => {
  return (
    <Router>
      <NavBar />
      <div id="postsDivs">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/new" component={NewPost} />
          <Route render={() => <div>post not found </div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
