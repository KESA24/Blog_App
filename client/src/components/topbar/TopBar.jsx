
import { Link } from "react-router-dom";
import "./topbar.css"

export default function topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-pinterest"></i>
            </div>
            <div className="topCentre">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user?(
                    <img 
                        className="topImg"
                        src="https://images.pexels.com/photos/3572989/pexels-photo-3572989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        alt="" 
                    />
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link> 
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
                }

                <i className ="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
