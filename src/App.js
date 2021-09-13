import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import { Login, Game, Settings, Feedback, Ranking, Credits } from './pages';

export default function App() {
  return (
    <div className="trivia-background">
      <Switch>
        <Route exact path="/trybetrivia/" component={ Login } />
        <Route path="/gamescreen" component={ Game } />
        <Route path="/configscreen" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="/credits" component={ Credits } />

      </Switch>
    </div>
  );
}
