import React from 'react';
// import './NotFound.css';

/**
 * Renders when route isn't found like 404
 */
export default () =>
  <div className="NotFound">
    <h1>404</h1>
    <h3>The page you were looking for is not here.</h3>
    <a href="/">Go Home</a>
  </div>;