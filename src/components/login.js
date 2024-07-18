import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost/wordpress/wp-json/jwt-auth/v1/token', {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
      {error && <div style={{ color: 'ed' }}>{error}</div>}
    </form>
  );
};

export default Login;