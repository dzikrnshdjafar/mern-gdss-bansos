// Button.jsx

import React, { useState } from 'react';

const Button = ({ onClick, type }) => {
  const [showSubButtons, setShowSubButtons] = useState(false);

  const handleKabKotaClick = () => {
    if (type === 'kabkota') {
      setShowSubButtons(!showSubButtons);
    } else {
      onClick(type);
    }
  };

  return (
    <div>
      <button onClick={handleKabKotaClick} className="btn-primary">
        {type === 'kabkota' ? 'Input Kabupaten/Kota' : 'Input Masyarakat'}
      </button>
      {showSubButtons && (
        <div>
          <button onClick={() => onClick('kabkotaFile')} className="btn-secondary">
            Input File
          </button>
          <button onClick={() => onClick('kabkotaData')} className="btn-secondary">
            Input Data Kabupaten/Kota
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
