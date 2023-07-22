import Navbar from './Navbar';
import logo from './images/Logo_laraid.jpeg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>  
      <div class="headerClass"><center>Apartment Complex Maintenance<sup class="product"> @LARAID SOFTWARE SOLUTIONS </sup></center></div>     
      <div className="nav-area">
        <Link to="/" className="logo">
            <span><img src={logo} alt="Logo" width="60" heigh="30"/></span>
        </Link>        
        <Navbar />
      </div>
    </header>
  );
};

export default Header;