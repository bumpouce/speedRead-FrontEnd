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
        <Route path={`${process.env.PUBLIC_URL}/`} render={props => <NavBar  {...props} onLogout={this.onLogout}/>}/>
        <Route exact path={`${process.env.PUBLIC_URL}/`}> {this.state.user ? <Redirect to={`${process.env.PUBLIC_URL}/practice`} /> : <Redirect to={`${process.env.PUBLIC_URL}/login`}/>}</Route>
        <Route exact path={`${process.env.PUBLIC_URL}/login`} render={props => <Login {...props} onLogin={this.setUser} />}/>
        <Route path= {`${process.env.PUBLIC_URL}/stats`} render={props => <Charts {...props} setUser={this.setUser} />}/>
        <Route path= {`${process.env.PUBLIC_URL}/tips`} render={props => <Tips {...props} setUser={this.setUser} /> } />
        <Route path= {`${process.env.PUBLIC_URL}/practice`} render={props => <Read {...props} setUser={this.setUser} />} />
        </Router>
        <Footer />
        </Fragment>
      )
  }
}


