import React, { Component, Fragment } from 'react'
const LOGIN_URL = 'https://readspeedbackend.herokuapp.com/login'
const NEWUSER_URL = 'https://readspeedbackend.herokuapp.com/users'

export class Login extends Component {

    state = {
        nameLogin: "",
        passwordLogin: "",
        nameSignup: "",
        passwordSignup: "",
        firstname: "",
        lastname: "",
        agreement: "off"
    }

    // handleChangeSelect=(event)=>{
    //     this.setState({countrySignup:event.target.value})
    // }
    handleLogin = (event) => {
        event.preventDefault()
        const { nameLogin, passwordLogin } = this.state
        console.log(nameLogin, passwordLogin)
        fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: nameLogin,
                    password: passwordLogin,
                }
            })
        })
            .then(r => r.json())
            .then(json => {
                if (!json.message){
                    console.log(json)
                    this.storeToken(json)
                    this.props.history.push('/practice')
                    console.log('Returned from fetch!')
                }else {
                    window.location.reload(false)
                }
            })
    }

    handleCreateUser = (event) => {
        event.preventDefault()
        const { nameSignup, passwordSignup, firstname, lastname, agreement} = this.state

        fetch(NEWUSER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: nameSignup,
                    password: passwordSignup,
                    firstname: firstname,
                    lastname: lastname,
                    agreement: agreement
                }
            })
        })
            .then(r => r.json())
            .then(json => {
                console.log('Returned from fetch with ', json)
                this.storeToken(json)
                this.props.history.push('/practice')
            })
    }

    storeToken(json) {
        this.props.onLogin(json.user)
        localStorage.setItem('username', JSON.stringify(json.user.username))
        localStorage.setItem('firstname', JSON.stringify(json.user.firstname))
        localStorage.setItem('id', JSON.stringify(json.user.id))
        localStorage.setItem('token', json.jwt)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheck = (event) => {
        this.setState({
            agreement: (this.state.agreement == "on" )? "off" : "on"
        })
    }

    render() {
        return (
            <Fragment>
            <section id="our-stats">
                <br></br>
            <h2 className="text-green h1 text-center">Welcome to readSpeed!</h2>
            <p className="text-uppercase text-center font-italic font-weight-light">Log In or Sign Up Below to Practice</p>
        </section>
            <div className="container login-container">

                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Log In!</h3>
                        <hr/>
                        <form onSubmit={this.handleLogin}>
                            <div className="form-group">
                                <input name="nameLogin" required type="text" className="form-control" placeholder="User Name" value={this.state.nameLogin} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input name="passwordLogin" required type="password" className="form-control" placeholder="Your Password *" value={this.state.passwordLogin} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 login-form-2">
                        <h3>Sign Up!</h3>
                        <hr/>
                        <form onSubmit={this.handleCreateUser}>
                            <div className="form-group">
                                <input name="nameSignup" required type="text" className="form-control" placeholder="User Name" value={this.state.nameSignup} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input name="firstname" required type="text" className="form-control" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input name="lastname" required type="text" className="form-control" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input name="passwordSignup" required type="password" className="form-control" placeholder="Your Password *" value={this.state.passwordSignup} onChange={this.handleChange} />
                            </div>
                            <div >
                            <input name="agreement" id="agreement" type="checkbox"  placeholder="Content Agreement" onClick={this.handleCheck} /> 
                            <i>I will only contribute material that is not copyrighted and not explicit or offensive.  I understand that other users may see content I contribute</i>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Login