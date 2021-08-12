import { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();

    },[])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sideImg" src="https://images.pexels.com/photos/915972/pexels-photo-915972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, delectus quo
                    incidunt fugit dolorum id itaque quam rerum ab sed sequi consequuntur vero possimus,
                    eos sit eius ad dolores sunt?</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
