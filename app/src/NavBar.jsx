import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      registerModal: false,
    };
    this.goAwayModal = this.goAwayModal.bind(this);
  }

  goAwayModal() {
    this.setState({ loginModal: false, registerModal: false });
  }

  render() {
    return (
      <header>
        <nav className="navbar">
          <h1 className="navbar-brand">Tripify</h1>
          <div className="navbar-end">
            <button
              type="button"
              className="button is-primary"
              onClick={() => { this.setState({ loginModal: !this.state.loginModal, registerModal: false }); }}
            >Login</button>
            <button
              type="button"
              className="button is-primary"
              onClick={() => { this.setState({ registerModal: !this.state.registerModal, loginModal: false }); }}
            >Register</button>
          </div>

          {(this.state.loginModal ? (
            <LoginForm isActive="modal is-active" allGone={this.goAwayModal} />
          ) : null)}
          {(this.state.registerModal ? (
            <RegisterForm
              isActive="modal is-active"
              allGone={this.goAwayModal}
            />
          ) : null)}
        </nav>
      </header>
    );
  }
}

export default NavBar;
