import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Redirect, Link} from "react-router-dom"
import {Modal, Button} from 'react-bootstrap'
import trophy from '../great-job-stamp.jpg'
import fb from '../Facebook.png'
import email from '../Email.png'

const ModalComp = ({closeModal}) => {

        return (
            <Modal displayClassName="modal" show="false" width="400" height="800">
                <div className="win">
                    <br></br>
                    <p><img className="logo" src={trophy} alt="completed" /></p>
                    <strong>Good work!</strong>
                    <ul className="share-buttons">
                        <li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.localhost3000%2F&quote=ComePlayPairUp!" title="Share on Facebook" target="_blank"><img alt="Share on Facebook" src={fb} /></a></li>
                        <li><a href="mailto:?subject=PairUp!&body=Come%20play%20this%20super%20fun%20memory%20game%20and%20improve%20your%20memory!:%20http%3A%2F%2Fwww.localhost3000%2F" target="_blank" title="Send email"><img alt="Send email" src={email} /></a></li>
                    </ul>
                    <Button variant="primary" onClick={() => window.location.reload(false)}>Practice Again!</Button><br></br>
                    <Button variant="primary" onClick={() => closeModal()}><Link to='/stats'> Look at your statistics </Link> </Button>
                </div>
            </Modal> 
        )
}

export default ModalComp


