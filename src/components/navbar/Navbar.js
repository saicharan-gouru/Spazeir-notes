import "./Navbar.css";
import {Link,useNavigate} from "react-router-dom";
import {useAuth,useNotes} from "../../contexts";

function Navbar(){

    const {user,setUser} = useAuth();
    const navigate = useNavigate();
    const {notesDispatch} = useNotes();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
        notesDispatch({type:"RESET"})
      };

    return(
        <div className="nav-bar">
           <Link to="/" className="title">Spazeir Notes</Link>
           <Link to="/notes" className="categories"><h3>Notes</h3></Link> 
           {user ? <button className="button primary-red" onClick={logoutHandler}>Logout</button> : <Link to="/login"><button className="button primary-green">Login/Signup</button></Link>}
        </div>
    );
}

export { Navbar };