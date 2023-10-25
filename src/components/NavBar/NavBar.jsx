import { Link } from "react-router-dom"
import "./NavBar.css";
export default function NavBar(){
    return(
        <nav className="flex-container">
            <Link to="/portfolioproj" className="flex-item">Home</Link>
            <Link to="/about" className="flex-item">About</Link>
            <Link to="/projects" className="flex-item">Projects</Link>

        </nav>
    )
}