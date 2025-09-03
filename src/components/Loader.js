import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <span style={{ '--d': '0s' }}>L</span>
      <span style={{ '--d': '0.1s' }}>O</span>
      <span style={{ '--d': '0.2s' }}>A</span>
      <span style={{ '--d': '0.3s' }}>D</span>
      <span style={{ '--d': '0.4s' }}>I</span>
      <span style={{ '--d': '0.5s' }}>N</span>
      <span style={{ '--d': '0.6s' }}>G</span>
    </div>
  );
};

export default Loader;
