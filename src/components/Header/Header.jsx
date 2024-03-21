import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div>

            <nav>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about" >About</Link></div>
                <div><Link to= "/contact">Contact Us</Link></div>
                <div><Link to= "/users">Users</Link></div>
                <div><Link to= "/posts">Posts</Link></div>
                
           
            </nav>
            
        </div>
    );
};

export default Header;