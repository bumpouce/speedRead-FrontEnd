import React, { Component, Fragment } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import name from '../images/readSpeed.png'

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
            <iframe src="https://giphy.com/embed/xUA7b2OfgTuVzqpVXq" class="logo" alt='giphy image person reading'></iframe>
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
              <img src={name} alt="readSpeed logo"/>
          </Navbar>
          </Fragment>
        )
    }
}

export default TopBar