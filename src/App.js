import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom"



import HomePage from './pages/homepage/homepage.component';


class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact route="/" component={HomePage}/>
        </Switch>
      </div>
    )
  }
};

export default App;
