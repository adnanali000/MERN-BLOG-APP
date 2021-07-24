import './navbar.css'

export default function Navbar() {
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
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>

                </ul>
            </div>
            <div className="navRight">
                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className="navImg" />
                <i className="navSearch fas fa-search"></i>
            </div>

        </div>
    )
}
