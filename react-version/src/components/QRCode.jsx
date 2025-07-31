import React from 'react';
import '../styles/QRCode.css';
import qrCodeImage from '../assets/images/image-qr-code.png';

const QRCode = () => {
  return (
    <div className="qr-container">
      <img src={qrCodeImage} alt="QR Code" className="qr-image" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Front-end Mentor and take your skills to the next level.</p>
    </div>
  );
};

export default QRCode;
