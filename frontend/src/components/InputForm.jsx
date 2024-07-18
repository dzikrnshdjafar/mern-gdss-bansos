import { FileInput, Label, Button, TextInput, Card } from "flowbite-react";
import React, { useState } from 'react';
import axios from 'axios';

export function InputForm({fetchGeojsonData}) {
  const [file, setFile] = useState(null);
  const [NAMOBJ, setNAMOBJ] = useState('');
  const [geojsonNames, setGeojsonNames] = useState([]); // State untuk menyimpan daftar nama GeoJSON

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !NAMOBJ) return; // Cek apakah file dan NAMOBJ sudah diisi

    const formData = new FormData();
    formData.append('geojson', file);
    formData.append('NAMOBJ', NAMOBJ); // Menambahkan NAMOBJ ke formData

    try {
      const response = await axios.post('http://localhost:5000/api/geojsons', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        // alert('File GeoJSON berhasil diunggah!');
        console.log('Response data:', response.data);
        fetchGeojsonData();
        setGeojsonNames([...geojsonNames, NAMOBJ]); // Menambahkan nama GeoJSON ke daftar
        setNAMOBJ(''); // Reset input NAMOBJ
        setFile(null); // Reset file input
      } else {
        // alert('Gagal mengunggah file GeoJSON.');
        console.log('Response status:', response.status);
      }
    } catch (error) {
      console.error('Upload error:', error);
      // alert('Terjadi kesalahan: ' + error.message);
    }
  };

  return (
      <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body">
        
      <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs mb-4" onChange={handleFileChange} />
          Input Nama Geojson
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-4" value={NAMOBJ} onChange={(e) => setNAMOBJ(e.target.value)}/>
        <div className="card-actions justify-end">
        <button className="btn btn-primary" type="submit">Simpan</button>
        </div>
      </form>
  
      {/* <GeojsonList geojsonNames={geojsonNames} setGeojsonNames={setGeojsonNames} /> */}
      </div>
    </div>
  );
}
