import React, { useState } from 'react';
import { FaBars, FaUserAlt, FaPlus, FaCheck, FaSignOutAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Css/Sidebar.css'; 

const Sidebar = ({ handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

    const menuItem = [
        {
            path: "/manage-admin",
            name: "Administration",
            icon: <FaUserAlt />
        },
        {
            path: "/admin-manage-user",
            name: "Management",
            icon: <FaPlus />
        },
        {
            path: "/admin-pointage",
            name: "Attendance",
            icon: <FaCheck />
        }
    ];

    const onLogout = () => {
        handleLogout();
        navigate('/login'); // Redirection vers la page de connexion après la déconnexion
    };

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="top_section">
                <FaBars onClick={toggle} className="menu-bars" />
                <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>Logo</h1>
            </div>
            <ul className="nav flex-column">
                {menuItem.map((item, index) => (
                    <li key={index} className="nav-item">
                        <NavLink to={item.path} className="nav-link text-light" activeClassName="active">
                            {item.icon}
                            <span style={{ display: isOpen ? "inline" : "none" }}>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
                <li className="nav-item">
                    <button className="nav-link text-light bg-info border-0 w-100" onClick={onLogout}>
                        <FaSignOutAlt />
                        <span style={{ display: isOpen ? "inline" : "none" }}>Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
