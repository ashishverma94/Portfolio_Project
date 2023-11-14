import './index.scss' ;
import { Link, NavLink } from 'react-router-dom';
import MyA from '../../assets/images/mya.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess, faChessKing, faChessKnight, faChessPawn, faEnvelope, faFolder, faHome, faUser, faWrench} from '@fortawesome/free-solid-svg-icons' ;
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () =>(
    <div className='nav-bar'>
        <Link  className="logo" to = '/'>
             <img src = {MyA} alt = "logo" />
        </Link>

        <nav>
            <NavLink exact = "true" activeClassname = "active" to ="/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeClassname = "active" className="about-link" to ="/about">
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeClassname = "active" className="contact-link" to ="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeClassname = "active" className="project-link" to ="/projects">
                <FontAwesomeIcon icon = {faFolder} color = "#4d4d4e" />
            </NavLink>
            {/* <NavLink exact = "true" activeClassname = "active" className="skill-link" to ="/contact">
                <FontAwesomeIcon icon = {faWrench} color = "#4d4d4e" />
            </NavLink> */}

            
        </nav>

        <ul>
            <li>
                <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.linkedin.com/in/ashish-verma-3865b51b0/" 
                >
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://github.com/ashishverma94" 
                >
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.chess.com/stats/live/rapid/a_verma_plu" 
                >
                    <FontAwesomeIcon icon={faChessKnight} color = "#4d4d4e" />
                </a>
            </li>
        </ul>

        
    </div>

)

    


export default Sidebar
