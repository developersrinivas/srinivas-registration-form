import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for authentication
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/login'); // Redirect to the login page if not logged in
      return;
    }

    // Fetch data if authenticated
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.sheetbest.com/sheets/2911604f-ec0a-49ba-8849-339a91ed671d?limit=40'
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="bg-white/30 backdrop-blur-lg border border-white/30 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6"  >
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Submitted Data</h2>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-full mb-4 hover:bg-red-600 transition-all"
      >
        Logout
      </button>
      
      {/* Container with fixed height and scroll */}
      <div className=" overflow-y-auto" style={{height:'100vh'}}>
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 mb-4 border border-white/30"
          >
            <div className="flex items-center mb-4">
              <FaUser className="text-purple-500 text-2xl mr-3" />
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 text-2xl mr-3" />
              <p className="text-gray-300">{item.email}</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-green-500 text-2xl mr-3" />
              <p className="text-gray-300">{item.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default DataDisplay;
