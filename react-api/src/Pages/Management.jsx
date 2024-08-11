import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Manage = () => {
  const adminData = {
    serialNo: 1,
    name: 'FZZEROUAL',
    email: 'zeroual@gmail.com',
    username: 'fzzeroual',
    pass: '123'
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Manage Employee</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-4">
          <thead className="thead-dark">
            <tr>
              <th>Serial No.</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Username</th>
              <th>Temp Password</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{adminData.serialNo}</td>
              <td>{adminData.name}</td>
              <td>{adminData.email}</td>
              <td>{adminData.username}</td>
              <td>{adminData.pass}</td>
              <td>
                <button className="btn btn-info btn-sm">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <Link to="/nvemployee" className="btn btn-info btn-sm">
          ADD
        </Link>
      </div>
    </div>
  );
};

export default Manage;
