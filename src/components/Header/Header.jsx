import { Link, NavLink } from "react-router-dom";
import './Header.css'



const Header = () => {
    return (
        <div>

            <nav>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about" >About</Link></div>
                <div><Link to= "/contact">Contact Us</Link></div>

                <div>
                    {/* <Link to= "/users">Users</Link> */}
                    <NavLink to= "/users"> Users</NavLink>

                </div>

                <div>
                    {/* <Link to= "/posts">Posts</Link> */}

                    <NavLink to='/posts' > Posts </NavLink>
                    
                </div>
                
           
            </nav>
            
        </div>
    );
};

export default Header;