// Components/AdminLayout.js
import React from 'react';
import Sidebar from "../Components/Sidebar";

const AdminLayout = ({ children, handleLogout }) => {
    return (
        <div className="admin-layout">
            <Sidebar handleLogout={handleLogout} />
            <div className="main-content">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
