import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const selectCategory = useSelector(state => state.filterSlice.categoryId);

  return (
    <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand"><Link to="/" >Pizzaa Mizzaa React Project</Link></a>
            
          </div>
        </nav>
  );
}

export default Header;
