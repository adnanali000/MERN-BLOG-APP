import './navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar() {
    const user = false;
    return (
        <div className="nav">
            <div className="navLeft">
            <i className="navIcon fab fa-facebook-square"></i>
            <i className="navIcon fab fa-pinterest-square"></i>
            <i className="navIcon fab fa-instagram-square"></i>
            <i className="navIcon fab fa-twitter-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                   <li className="navListItem"><Link className="link" to ="/">HOME</Link></li>
                    <li className="navListItem"><Link className="link" to ="/about">ABOUT</Link></li>
                    <li className="navListItem"><Link className="link" to ="/contact">CONTACT</Link></li>
                   <li className="navListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="navListItem">
                        {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="navRight">
                {
                user ? (
                        <img src="https://avatars.githubusercontent.com/u/46294668?v=4" alt="" className="navImg" />
                       )
                      :(
                    //   <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className="navImg" />
                        <ul className="navList">
                            <li className="navListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    
                    )}
                <i className="navSearch fas fa-search"></i>
            </div>

        </div>
    )
}
