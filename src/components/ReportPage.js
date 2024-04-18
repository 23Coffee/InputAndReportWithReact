import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ReportPage = () => {
  // Access location state to retrieve form data
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div>
      <nav style={{ backgroundColor: '#1F2937', padding: '1rem', marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#FFFFFF', marginRight: '1rem', textDecoration: 'none' }}>Input Page</Link>
        <Link to="/report" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Report Page</Link>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '90%', maxWidth: '400px', padding: '2rem', backgroundColor: '#1F2937', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', color: '#FFFFFF' }}>
          <h2 style={{ textAlign: 'center' }}>Report Page</h2>
          {formData && (
            <div>
              <p><strong>Name + Surname:</strong> {formData.name}</p>
              <p><strong>Document Date:</strong> {formData.documentDate}</p>
              <p><strong>Duration:</strong> {formData.startDate} to {formData.endDate}</p>
              <p><strong>Amount:</strong> {formData.amount}</p>
              <p><strong>Place:</strong> {formData.place}</p>
              <p><strong>ID Card Number:</strong> {formData.idCardNumber}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
