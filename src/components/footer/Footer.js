import "./Footer.css";
import { AiFillLinkedin,AiFillTwitterCircle,AiFillGithub } from 'react-icons/ai';



function Footer(){

    return(
        <div>
        <footer className="hero-footer">
            <div className="social">
                <a href="https://www.linkedin.com/in/saicharangouru/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="social-media-icon" style={{ fontSize: "30px" }} /></a>
                <a href="https://twitter.com/saicharangouru" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle className="social-media-icon" style={{ fontSize: "30px" }} /></a>
                <a href="https://github.com/saicharan-gouru/" target="_blank" rel="noopener noreferrer"><AiFillGithub className="social-media-icon" style={{ fontSize: "30px" }} /></a>
            </div>
            <p>Made with 💖 by  <a className="footer-credits" href="https://saicharangouru.netlify.app" target="_blank" rel="noopener noreferrer"> Saicharan Gouru </a></p>
            <small>ⓒ Boolean Quizzo | 2022</small>
         </footer>
    </div>
    );
}

export { Footer };