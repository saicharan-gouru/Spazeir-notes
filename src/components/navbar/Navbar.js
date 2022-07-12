import "./Navbar.css";
import {Link,useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts";

function Navbar(){

    const {user,setUser} = useAuth();
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
      };

    return(
        <div className="nav-bar">
           <Link to="/" className="title">Spazeir Notes</Link>
           <Link to="/notes" className="categories"><h3>Notes</h3></Link> 
           {user ? <button onClick={logoutHandler}>Logout</button> : <button><Link to="/login">Login</Link></button>}
        </div>
    );
}

export { Navbar };