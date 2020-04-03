/* eslint-disable react/no-this-in-sfc */
/* eslint-disable new-cap */
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
import SignIn from '../containers/signin';
import NavBar from './navBar';
import Home from '../containers/home';
import AfterAcceptNeighbor from '../containers/afterAcceptNeighbor';
import ProfileNeighbor from '../containers/profileNeighbor';
import ProfileReci from '../containers/profileReci';
import Disclaimer1 from '../containers/disclaimer1';
import Disclaimer2 from '../containers/disclaimer2';
import RequireAuth from '../containers/requireAuth';

const App = (props) => {
  return (
    <Router>
      <NavBar />
      <div id="postsDivs">
        <Switch>
          <Route exact path="/" component={RequireAuth(Home)} />
          <Route path="/signin" component={SignIn} />
          <Route path="/posts/new" component={RequireAuth(NewPost)} />
          <Route path="/disclaimer1" component={RequireAuth(Disclaimer1)} />
          <Route path="/disclaimer2" component={RequireAuth(Disclaimer2)} />
          <Route path="/afterAcceptNeighbor" component={RequireAuth(AfterAcceptNeighbor)} />
          <Route path="/profileNeighbor" component={RequireAuth(ProfileNeighbor)} />
          <Route path="/profileReci" component={RequireAuth(ProfileReci)} />
          <Route render={() => <div>post not found </div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
