import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="Logo">
      <h1>DARREN ANGLE</h1>
      <p>CREATIVE ENGINEER</p>
    </Link>
  );
};

export default Logo;
