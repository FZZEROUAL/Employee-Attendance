

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import '../Css/Scanne.css'; 

const EmployeeScanne = () => {
  const [scanned, setScanned] = useState(false);

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleResultWebCam = (result) => {
    if (result) {
      setScanned(true);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center">Scan QR Code</h2>
        </div>
        <div className="card-body">
          <QrReader
            delay={300}
            style={{ width: '100%' }}
            onError={handleErrorWebCam}
            onResult={handleResultWebCam}
          />
          {scanned && <h3 className="mt-3 text-success">Le code QR a été scanné avec succès!</h3>}
        </div>
      </div>
    </div>
  );
};

export default EmployeeScanne;
