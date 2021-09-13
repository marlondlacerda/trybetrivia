import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import { Login, Game, Settings, Feedback, Ranking, Credits } from './pages';

export default function App() {
  return (
    <div className="trivia-background">
      <Switch>
        <Route exact path="/trybetrivia/" component={ Login } />
        <Route path="/trybetrivia/gamescreen" component={ Game } />
        <Route path="/trybetrivia/configscreen" component={ Settings } />
        <Route path="/trybetrivia/feedback" component={ Feedback } />
        <Route path="/trybetrivia/ranking" component={ Ranking } />
        <Route path="/trybetrivia/credits" component={ Credits } />

      </Switch>
    </div>
  );
}
