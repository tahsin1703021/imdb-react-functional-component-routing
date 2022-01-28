import React, { Component } from 'react';
import Movies from './components/movies.component';
import Navbar from './components/navbar.component';
import Student from './components/students.component';
import SignIn from './common/signIn.component';
import SignUp from './common/signUp.component';
import NotFound from './common/not-found.component';
import CreateMovies from './components/create-movies.component';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() { 
    return (
      <div>
          <Navbar/>   
          <Switch>
              <Route path="/allMovies" component={Movies} />
              <Route path="/signIn" component={SignIn} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/createMovies" component={CreateMovies} />
              <Route path="/" component={Movies} />
              <Redirect to="not-found" component={NotFound}/>
              
              
          </Switch>
          
        
      </div>
    );
  }
}
 
export default App;

