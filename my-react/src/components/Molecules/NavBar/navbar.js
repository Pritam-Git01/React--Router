import { useState } from "react";
import './navbar.css'
import Logo from "../../Atoms/Logo/logo";
import {BsList} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const navigate = useNavigate()


  return (
    <nav className="navigation">
      <a  href="/" className="brand-name">
        <Logo  />
      </a>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a onClick={() => navigate('/')} href="/">Home</a>
          </li>
          <li>
            <a onClick={() =>  navigate('/cart')} href="/cart">Cart</a>
          </li>
         
        </ul>
      </div>
      <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <BsList />
      </button>
    </nav>
  );
}