import React, {PureComponent, Fragment } from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';

import NavBar from './containers/NavBarContainer'
import Login from './containers/LoginContainer'
import Footer from './containers/FooterContainer'
import Charts from './containers/ChartsContainer';
import Tips from './containers/TipsContainer'
import Read from './containers/ReadingContainer'

export default class App extends PureComponent {

    state={
        user:''
    }

  onLogout=()=> {
    this.setState({user: ""})
    localStorage.clear()
  }

  setUser=(user)=> {
   this.setState({user: user})
  }

  render() {
      return (
        <Fragment>
        <Router basename={'/speedRead-FrontEnd'}>
        <Route path="/" render={props => <NavBar  {...props} onLogout={this.onLogout}/>}/>
        <Route exact path="/"> {this.state.user ? <Redirect to="/practice" /> : <Redirect to="/login"/>}</Route>
        <Route exact path="/login" render={props => <Login {...props} onLogin={this.setUser} />}/>
        <Route path= '/stats' render={props => <Charts {...props} setUser={this.setUser} />}/>
        <Route path= '/tips' render={props => <Tips {...props} setUser={this.setUser} /> } />
        <Route path= '/practice' render={props => <Read {...props} setUser={this.setUser} />} />
        </Router>
        <Footer />
        </Fragment>
      )
  }
}


