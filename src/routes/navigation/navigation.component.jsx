import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
    return (
      <div className="navigation">
        <div className="logo-container">logo</div>
            <div className="nav-links-container">
            <ul>
            <li>
              <Link to='/'>Home Page</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
          </ul>
            </div>
        <Outlet/>
      </div>
    );
  };

export default Navigation;