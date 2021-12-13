import React from 'react';
import './Links.css';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="Links">
      <Link to="/work">WORK</Link>
      <Link to="/about">ABOUT</Link>
    </div>
  );
};

export default Links;
