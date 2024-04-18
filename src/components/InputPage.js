import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const InputPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    documentDate: '',
    startDate: '',
    endDate: '',
    amount: '',
    place: '',
    idCardNumber: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to report page with form data as URL params
    history.push({
      pathname: '/report',
      state: { formData }
    });
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#1F2937', padding: '1rem', marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#FFFFFF', marginRight: '1rem', textDecoration: 'none' }}>Input Page</Link>
        <Link to="/report" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Report Page</Link>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '90%', maxWidth: '400px', padding: '2rem', backgroundColor: '#1F2937', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF' }}>Input Page</h2>
          </div>
          <div style={{ padding: '1rem' }}>
            <form onSubmit={handleSubmit}>
              {/* Form inputs */}
              {/* Label and input for name */}
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="create-account-name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', color: '#FFFFFF' }}>
                  Name + Surname:
                </label>
                <input
                  type="text"
                  id="create-account-name"
                  style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid #D1D5DB', backgroundColor: '#1F2937', color: '#FFFFFF', padding: '0.75rem', marginTop: '0.25rem' }}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
              </div>
              {/* Document Date */}
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="document-date" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', color: '#FFFFFF' }}>
                  Document Date:
                </label>
                <input
                  type="date"
                  id="document-date"
                  style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid #D1D5DB', backgroundColor: '#1F2937', color: '#FFFFFF', padding: '0.75rem', marginTop: '0.25rem' }}
                  name="documentDate"
                  value={formData.documentDate}
                  onChange={handleChange}
                  
                />
              </div>

              {/* Duration */}
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <label htmlFor="start-date" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', color: '#FFFFFF', marginRight: '1rem' }}>
                  Duration:
                </label>
                <input
                  type="date"
                  id="start-date"
                  style={{ width: '45%', borderRadius: '0.375rem', border: '1px solid #D1D5DB', backgroundColor: '#1F2937', color: '#FFFFFF', padding: '0.75rem', marginTop: '0.25rem' }}
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
                <span style={{ color: '#FFFFFF', marginLeft: '0.5rem', marginRight: '0.5rem' }}>to</span>
                <input
                  type="date"
                  id="end-date"
                  style={{ width: '45%', borderRadius: '0.375rem', border: '1px solid #D1D5DB', backgroundColor: '#1F2937', color: '#FFFFFF', padding: '0.75rem', marginTop: '0.25rem' }}
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>

              {/* Amount */}
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="amount" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', color: '#FFFFFF' }}>
                  Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid #D1D5DB', backgroundColor: '#1F2937', color: '#FFFFFF', padding: '0.75rem', marginTop: '0.25rem' }}
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                />
              </div>
              
              {/* Place */}
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="place" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', color: '#FFFFFF' }}>
                  Place:
                </label>
                <input
                  type="text"
                  id="place"
                  style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid #D1D5DB', backgroundColor: '#1F2937', color: '#FFFFFF', padding: '0.75rem', marginTop: '0.25rem' }}
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="Enter place"
                />
              </div>
              {/* ID Card Number */}
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="id-card-number" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', color: '#FFFFFF' }}>
                  ID Card Number:
                </label>
                <input
                  type="text"
                  id="id-card-number"
                  style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid #D1D5DB', backgroundColor: '#1F2937', color: '#FFFFFF', padding: '0.75rem', marginTop: '0.25rem' }}
                  name="idCardNumber"
                  value={formData.idCardNumber}
                  onChange={handleChange}
                  placeholder="Enter ID Card Number"
                />
              </div>
              {/* Submit button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#7C3AED',
                  color: '#FFFFFF',
                  padding: '0.75rem',
                  marginTop: '1rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold' // Add this line to make the text bold
                }}
              >
                Generate Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
