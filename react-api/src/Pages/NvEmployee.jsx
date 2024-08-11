import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NvEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [nvEmployee, setNvEmployee] = useState({ name: "", email: "", username: "" });
  const navigate = useNavigate();

  const Ajout = (e) => {
    e.preventDefault();
    if (nvEmployee.name && nvEmployee.email && nvEmployee.username) {
      setEmployees((prevEmployees) => [...prevEmployees, { ...nvEmployee, id: prevEmployees.length + 1 }]);
      setNvEmployee({ name: "", email: "", username: "" });
      navigate('/admin-manage-user'); 
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center">Nouvel Employé</h4>
      <div className="mb-3">
        <form onSubmit={Ajout}>
          <div className="form-group">
            <label className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={nvEmployee.name}
              onChange={(e) => setNvEmployee({ ...nvEmployee, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={nvEmployee.email}
              onChange={(e) => setNvEmployee({ ...nvEmployee, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={nvEmployee.username}
              onChange={(e) => setNvEmployee({ ...nvEmployee, username: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-info btn-sm mt-3 w-100">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default NvEmployee;
