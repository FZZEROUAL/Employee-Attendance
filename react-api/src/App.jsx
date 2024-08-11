import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Management from './Pages/Management';
import Attendance from './Pages/Attendance';
import AdminLayout from './Components/AdminLayout';
import NvEmployee from './Pages/NvEmployee';
import Machine from './Pages/Machine';
import EmployeeScanne from './Pages/EmployeeScanne';

function App() {
    const handleLogout = () => {
        console.log('Logged out');
    };

    return (
        <div className='container'>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/manage-admin"
                    element={
                        <AdminLayout handleLogout={handleLogout}>
                            <Admin />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-manage-user"
                    element={
                        <AdminLayout handleLogout={handleLogout}>
                            <Management />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-pointage"
                    element={
                        <AdminLayout handleLogout={handleLogout}>
                            <Attendance />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/nvemployee"
                    element={
                        <AdminLayout handleLogout={handleLogout}>
                            <NvEmployee />
                        </AdminLayout>
                    }
                />
                <Route path="/Machine" element={<Machine />} />
                <Route path="/ES" element={<EmployeeScanne />} />
            </Routes>
        </div>
    );
}

export default App;
