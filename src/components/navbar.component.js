import imdb from '../imdb.jpg';
import { Link } from "react-router-dom";


const Navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{padding:'10px'}}>
        <Link className="navbar-brand" to="/" style={{color:'white'}}>
          <img src={imdb} style={{height:'40px',width:'auto',borderRadius:'5px'}}/>
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/createMovies" style={{color:'white'}}>Create Movies</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/" style={{color:'white'}}>All Movies</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/signIn" style={{color:'white'}}>Sign In</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/signUp" style={{color:'white'}}>Sign Up</Link>
                    </li>
                </ul>
            </div>
        
    </nav>
   );
}
 
export default Navbar;
