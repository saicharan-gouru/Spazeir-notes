import "./Homepage.css";
import {Link} from "react-router-dom";



function Homepage(){
    return(
        <div className="main-container">
            <div>
                <h1 className="hero-heading">Welcome to Spazeir Notes</h1>
                <p className="hero-desc">Are you ready to give us a chance to manage your precious notes. </p>
                <Link to="/notes"><button className="button primary-green">Get started</button></Link>
            </div>
            <img className="hero-img" src="/assets/images/hero-img.svg" alt="hero-img" />
        </div>
    );
}

export {Homepage};