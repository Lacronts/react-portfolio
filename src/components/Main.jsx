import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Project from './Project'
import AboutMe from './AboutMe'
import Contact from './Contact'


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/project" component={Project} />
    <Route path="/aboutme" component={AboutMe}/>
    <Route path="/contacts" component={Contact}/>
  </Switch>
)

export default Main;
