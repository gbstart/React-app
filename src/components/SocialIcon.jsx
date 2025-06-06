import React from 'react';
import { Button } from 'react-bootstrap';

function SocialIcon({ icon, style = {}, variant = 'outline-secondary', className = '' }) {
  const defaultStyles = {
    width: '40px',
    height: '40px',
    margin: '0 10px',
    borderColor: '#000',
    color: '#000',
  };

  return (
    <Button
      variant={variant}
      className={`rounded-circle p-2 d-flex align-items-center justify-content-center ${className}`}
      style={{ ...defaultStyles, ...style }}
    >
      {icon}
    </Button>
  );
}

export default SocialIcon;
