import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="Navbar">
      <Logo />
      <div className="Links">
        <Link to="/work">WORK</Link> | <Link to="/about">ABOUT</Link>
      </div>
    </div>
  );
};
