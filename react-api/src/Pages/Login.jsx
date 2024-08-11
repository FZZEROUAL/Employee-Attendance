import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/login', { email, password });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ minHeight: '100vh', alignItems: 'center' }}>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <center>
                <h3 className="card-title" style={{ marginTop: '1px' }}>Pointage Employee</h3>
              </center>
              <form className="form-custom-login" onSubmit={handleLogin}>
                <div className="form-heading">
                  <h2 className="text-center">Login Panel</h2>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    className="form-control form-control-sm"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <br></br>
                <button type="submit" className="btn btn-info btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
