import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/1820575/pexels-photo-1820575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250" 
                alt=""
                 />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Et dignissimos eos, distinctio laudantium saepe impedit 
                    ea esse nam aliquid animi, vel culpa inventore provident 
                    molestias velit eveniet nihil commodi dolore. 
                </p>
            </div>
             <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
             <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook"></i>
                <i className="sidebarIcon fab fa-twitter"></i>
                <i className="sidebarIcon fab fa-pinterest"></i>
                <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div> 
        </div>
    )
}
