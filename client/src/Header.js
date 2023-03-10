import { Link } from "react-router-dom";

export default function Headers(){
    return(
        <header>
        <Link to="/">
          My Blog
        </Link>
        <nav>
          <Link to="/login">
            Login
          </Link>
          <Link to="/register">
            Register
          </Link>
        </nav>
      </header>
    );
}