import React from 'react';


const Admin = () => {
  const adminData = {
    serialNo: 1,
    name: 'FZZEROUAL',
    email: 'zeroual@gmail.com',
    username: 'fzzeroual'
  };

  return (
    <div className="container admin-container">
      <h1 className="text-center mt-4">Admin Page</h1>
      <div className="table-responsive mt-4 ">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{adminData.serialNo}</td>
              <td>{adminData.name}</td>
              <td>{adminData.email}</td>
              <td>{adminData.username}</td>
              <td>
                <button className="btn btn-info btn-sm">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
