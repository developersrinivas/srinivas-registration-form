import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  // Correct username and password
  const correctUsername = 'srinivas';
  const correctPassword = '1234567890';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if credentials match the correct ones
    if (credentials.username === correctUsername && credentials.password === correctPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard'); // Navigate only after setting the correct login state
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="m-3 justify-center align-middle">
      <form
        onSubmit={handleLogin}
        className="bg-white/30 backdrop-blur-lg border border-white/30 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
        {['username', 'password'].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-white capitalize mb-2">{field}</label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              value={credentials[field]}
              onChange={handleChange}
              className="w-full bg-transparent p-2 border border-white/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        ))}
        <button
          className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:from-purple-600 hover:to-blue-700 transition-all"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
