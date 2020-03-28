/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../styles/login.scss';
import '../styles/newPost.scss';
import '../styles/homeNeighbor.scss';
import '../styles/homeReci.scss';
import '../styles/afterAcceptNeighbor.scss';
import '../styles/profileNeighbor.scss';
import '../styles/profileReci.scss';
import '../styles/disclaimer1.scss';
import '../styles/disclaimer2.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NewPost from '../containers/newPost';
import Login from '../containers/login';
import NavBar from './navBar';
import HomeNeighbor from '../containers/homeNeighbor';
import HomeReci from '../containers/homeReci';
import AfterAcceptNeighbor from '../containers/afterAcceptNeighbor';
import ProfileNeighbor from '../containers/profileNeighbor';
import ProfileReci from '../containers/profileReci';
import Disclaimer1 from '../containers/disclaimer1';
import Disclaimer2 from '../containers/disclaimer2';

const App = (props) => {
  return (
    <Router>
      <NavBar />
      <div id="postsDivs">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/disclaimer1" component={Disclaimer1} />
          <Route path="/disclaimer2" component={Disclaimer2} />
          <Route path="/homeNeighbor" component={HomeNeighbor} />
          <Route path="/afterAcceptNeighbor" component={AfterAcceptNeighbor} />
          <Route path="/profileNeighbor" component={ProfileNeighbor} />
          <Route path="/profileReci" component={ProfileReci} />
          <Route path="/homeReci" component={HomeReci} />
          <Route render={() => <div>post not found </div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
