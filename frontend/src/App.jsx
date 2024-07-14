import {useState} from 'react'
import Logo from './components/Logo'
import Button from './components/Button'
import './App.css'
import 'leaflet/dist/leaflet.css'
import Form from './components/Form';
import Map from './components/Map';

import React from 'react';

function App() {

  const [showFormType, setShowFormType] = useState(null);

  const handleButtonClick = (type) => {
    setShowFormType(type);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <Map/>
        <h1>Form Input</h1>
      <div className="feature">
        <Button onClick={handleButtonClick} type="kabkota" />
        {/* Button untuk form Kabupaten/Kota */}
        <Button onClick={handleButtonClick} type="masyarakat" />
        {/* Button untuk form Masyarakat */}
      </div>
      {showFormType && <Form type={showFormType} />}
      {/* Menampilkan form sesuai dengan showFormType yang ditentukan */}
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
        <Logo/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


