import {Link} from "react-router-dom";
const Navbar = () => {

    
    return ( 
        <nav className="navbar">
            <h2 className="navbar-header">Jitsuin Archivist</h2>
            <div className="links">
                <Link to="/" style={{color: "white", backgroundColor: "#f1356d", padding:'5px', borderRadius:'5px'}}>Assets</Link>
                <Link to="#">Events</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;