import React from "react";
const CHECKUSER_URL = `https://readspeedbackend.herokuapp.com/check_user`

const AuthHOC = WrappedComponent => {

  return class AuthHOC extends React.Component {

    state = {
      authorized: false
    };

    componentDidMount() {
        this.checkLogin()
    }

    checkLogin = () => {
 
      if (!localStorage.getItem("token")) {
        console.log('Please log in!')
        this.props.history.push("/")
      } else {
        fetch(CHECKUSER_URL, {
            headers:
        { "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
        .then(res => res.json())
        .then((resp) => {
          if (resp.error) {
            console.log('There was an error with login')
            this.props.history.push("/")
          } else {
            this.props.setUser(resp.user)
            this.setState({
              authorized: true
            });
          }
        });
      }
    };

    isAuthorized = () => {
      return this.state.authorized;
    };

    render() {
      return (
        <div>
          {this.isAuthorized() ? (
            <WrappedComponent {...this.props} />
          ) : (
            null
          )}
        </div>
      );
    }
  };
};

export default AuthHOC;