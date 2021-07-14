import "./sidebar.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
          const res = await axios.get("/categories");
          setCats(res.data);
        };
        getCats();
      }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                src="https://media.itpro.co.uk/image/upload/f_auto,t_primary-image-mobile@1/v1570816773/itpro/2019/01/ethical_hacker.jpg" 
                alt="" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores adipisci illo earum voluptas explicabo totam beatae ipsa rerum nulla expedita quos 
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORY</span>
                <ul className="sidebarList">
                {cats.map((c) => (
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
