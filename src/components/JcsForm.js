import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// Form Component
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [closeForm, setCloseForm] = useState(false); // Tracks form submission state
  const [showForm, setShowForm] = useState(false); // Tracks visibility of the form
  const navigate = useNavigate(); // Used to navigate to the BlogPage

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      id: uuidv4(),
      created_at: new Date().toISOString()
    };

    try {
      // Send data to API (e.g., Google Sheets or backend)
      await axios.post(
        'https://api.sheetbest.com/sheets/2911604f-ec0a-49ba-8849-339a91ed671d',
        dataToSubmit
      );

      // Success alert with SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        text: 'Your message has been sent successfully.',
        confirmButtonText: 'Okay'
      });

      setCloseForm(true); // Show success message
      setTimeout(() => {
        setShowForm(false); // Close the form
      }, 2000); // Delay for SweetAlert confirmation
    } catch (error) {
      console.error(error);

      // Error alert with SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an issue submitting the form.',
        confirmButtonText: 'Try Again'
      });
    }
  };

  const blogPage = () => {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen mt-40">
        <div className="container mx-auto p-6">
          {/* Heading Section */}
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to JCS Consultancy</h1>
  
          {/* Description Section */}
          <div className="text-center mb-6">
            <p className="text-lg mb-4">
              At JCS, we are dedicated to connecting job seekers with their dream jobs and helping teachers find the best opportunities to connect with students.
            </p>
            <p className="text-lg mb-4">
              Whether you're looking for a career change, your first job, or trying to build your educational career, JCS is here to guide you through every step.
            </p>
          </div>
  
          {/* Image Section */}
          <div className="text-center mb-6">
          <img
           src="/consaltancy.jpg"
           alt="JCS Consultancy"
           className="rounded-lg shadow-lg"
           width="300"  
           height="200"  
         />

          </div>
  
          {/* Services Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1: Job Assistance */}
              <div className="bg-white text-black p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Job Assistance</h3>
                <p>
                  We provide personalized career support to job seekers, including resume building, interview preparation, and direct connections to employers.
                </p>
              </div>
  
              {/* Service 2: Teacher-Student Connection */}
              <div className="bg-white text-black p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Teacher & Student Connection</h3>
                <p>
                  JCS helps teachers find students for private tutoring, and vice versa, enabling both sides to achieve educational success through tailored matching.
                </p>
              </div>
            </div>
          </div>
  
          {/* Call-to-Action Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Get Started with JCS Today!</h3>
            <p className="text-lg mb-6">
              If you're ready to take the next step in your career or educational journey, we're here to help. Join us at JCS Consultancy!
            </p>
            <button
              onClick={() => setShowForm(true)} // Show the registration form when button is clicked
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition-all"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-3 m-3">
      {showForm ? (
        <div className="relative">
          {/* Show the form above the blog */}
          <form
            onSubmit={handleSubmit}
            className="text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6 bg-white/30 backdrop-blur-lg border border-white/30 z-10"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

            {['name', 'email', 'phone', 'subject'].map((field) => (
              <div key={field} className="mb-4">
                <label className="block text-white capitalize mb-2">{field}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full bg-transparent p-2 border border-white/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            ))}

            {/* Textarea for message */}
            <div className="mb-4">
              <label className="block text-white capitalize mb-2">message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent p-2 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
                required
              />
            </div>

            <button
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:from-purple-600 hover:to-blue-700 transition-all"
              type="submit"
            >
              Submit
            </button>
          </form>

          {/* Show success message when form is closed */}
          {closeForm && (
            <div className="text-center mt-4">
              <h1 className="text-3xl font-bold text-white mb-4">Form Has Been Submitted</h1>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all"
                onClick={() => setShowForm(false)} // Hide the form
              >
                Go Back to Blog
              </button>
            </div>
          )}
        </div>
      ) : (
        blogPage() // Show the blog page
      )}
    </div>
  );
};

export default Form;
