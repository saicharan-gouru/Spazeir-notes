import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar(){

    return(
        <div className="nav-bar">
           <Link to="/" className="title">Spazeir Notes</Link>
           <Link to="/notes" className="categories"><h3>Notes</h3></Link> 
        </div>
    );
}

export { Navbar };