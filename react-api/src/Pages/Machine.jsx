import React from 'react';
import QRCode from 'react-qr-code';

const Machine = () => {
  const timestamp = Date.now().toString();

  return (
    <div className="container mt-4">
      <h2 className="text-center">Welcome</h2>
      <div className="d-flex justify-content-center">
        <QRCode value={timestamp} size={250} />
      </div>
      <h2 className="text-center">Please Scan the QR code</h2>
    </div>
  );
};

export default Machine;
