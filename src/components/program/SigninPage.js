// import React, { useState } from 'react';
// import './index.css'; // Import the external CSS file

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     password: '',
//     email: '',
//     phoneNumber: '',
//     profession: 'Select Profession',
//   });

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store the data in local storage
//     localStorage.setItem('userData', JSON.stringify(formData));
//     // Reset form data
//     setFormData({
//       name: '',
//       password: '',
//       email: '',
//       phoneNumber: '',
//       profession: 'Select Profession',
//     });
//   };

//   return (
//     <div className="container"> 
//       <div className="form-container"> 
//         <h2>User Sign Up</h2>
//         <form onSubmit={handleSubmit}> 
         
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Phone Number:</label>
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Profession:</label>
//             <select
//               name="profession"
//               value={formData.profession}
//               onChange={handleChange}
//               required
//             >
//               <option disabled value="Select Profession">
//                 Select Profession
//               </option>
//               <option value="Developer">Developer</option>
//               <option value="Designer">Designer</option>
//               <option value="Manager">Manager</option>
              
//             </select>
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import './index.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: 'Select Profession',
  });

  const [errors, setErrors] = useState({
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: '',
  });

  const history = useHistory(); // Get the history object from react-router-dom

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Reset the corresponding error message when the user starts typing again
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    let formIsValid = true;
    const newErrors = { ...errors };

    if (formData.name === '') {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

    if (formData.password === '') {
      newErrors.password = 'Password is required';
      formIsValid = false;
    }

    if (formData.email === '') {
      newErrors.email = 'Email is required';
      formIsValid = false;
    }

    if (formData.phoneNumber === '') {
      newErrors.phoneNumber = 'Phone number is required';
      formIsValid = false;
    }

    if (formData.profession === 'Select Profession') {
      newErrors.profession = 'Please select a profession';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      // Store the data in local storage
      localStorage.setItem('userData', JSON.stringify(formData));
      // Reset form data
      setFormData({
        name: '',
        password: '',
        email: '',
        phoneNumber: '',
        profession: 'Select Profession',
      });

      // Redirect to the login page after successful form submission
      history.push('/login');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>User Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>} {/* Show error message */}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>} {/* Show error message */}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>} {/* Show error message */}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>} {/* Show error message */}
          </div>
          <div>
            <label>Profession:</label>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
            >
              <option disabled value="Select Profession">
                Select Profession
              </option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.profession && <p className="error">{errors.profession}</p>} {/* Show error message */}
          </div>
          <Link to="/login">
            <button type="submit">Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
