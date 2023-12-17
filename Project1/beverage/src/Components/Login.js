import React from 'react';
import '../assets/css/login.css';
import Sign_up from './Sign_up';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // perform login logic here
  };

  return (
    <>
      <div className="logincontainer">
        <div className="login-item">
          <div className="logo">Sign in</div>

          <form action="" method="post" className="form form-login" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="user" htmlFor="login-username">
                <span className="hidden">Username</span>
              </label>
              <input id="login-username" type="text" className="form-input" placeholder="Username" required />
            </div>

            <div className="form-field">
              <label className="lock" htmlFor="login-password">
                <span className="hidden">Password</span>
              </label>
              <input id="login-password" type="password" className="form-input" placeholder="Password" required />
            </div>

            <div className="form-field">
              <a href="#">Forgot password?</a>
            </div>

            <div className="form-field">
              <input type="submit" value="Log in" />
            </div>
          </form>

          <div className="links">
            <p>
              Don't have an account <a href="Sign_up">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
