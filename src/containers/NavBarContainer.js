import React, { Component, Fragment } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export class TopBar extends Component {
  handleLogout=()=>{
    this.props.onLogout()
    this.props.history.push('/')
  }
    render() {
        return (
          <Fragment>
            <Navbar expand="sm">
            <Navbar.Brand href="/home" className="navbar-left"></Navbar.Brand>
            <iframe src="https://giphy.com/embed/xUA7b2OfgTuVzqpVXq" class="logo"></iframe>
              <Nav className="mr-auto">
                {(this.props.history.location.pathname == '/practice') ? 
                  <Navbar.Text onClick={ () => {window.location.reload(false)}}>Practice</Navbar.Text> :
                  <Navbar.Text><Link to="/practice">Practice</Link></Navbar.Text>
                } 
               <Navbar.Text> <Link to="/stats">Stats</Link></Navbar.Text>
               <Navbar.Text> <Link to="/tips">Tips</Link></Navbar.Text>
               {  (localStorage.getItem('id')) ?
                  <Navbar.Text onClick={()=>this.handleLogout()}>Logout</Navbar.Text> :
                  null
               }
              </Nav>
              <h1>readSpeed</h1>
          </Navbar>
          </Fragment>
        )
    }
}

export default TopBar