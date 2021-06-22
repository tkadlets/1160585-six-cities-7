import React from 'react';
import { Link } from 'react-router-dom';


function NotFoundPage () {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{ color: 'red'}}>404. Page not found</h1>
      <Link style={{textDecoration: 'underline'}} to="/">Back to homepage</Link>
    </div>
  );
}

export default NotFoundPage;
