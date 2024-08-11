import React from 'react';

const Attendance = () => {
 
  const adminData = {
    serialNo: 1,
    name: 'FZZEROUAL',
    email: 'zeroual@gmail.com',
    username: 'fzzeroual',
    clockin : '20-04-2024 15:36:00',
    clockout : '20-04-2024 16:00:00',

  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Attendance page</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-4">
          <thead className="thead-dark">
            <tr>
            <th>Serial No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>clockin</th>
              <th>clockout</th>
            </tr>
          </thead>
          <tbody>
        
            <tr>
              <td>{adminData.serialNo}</td>
              <td>{adminData.name}</td>
              <td>{adminData.email}</td>
              <td>{adminData.username}</td>
              <td>{adminData.clockin}</td>
              <td>{adminData.clockout}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
