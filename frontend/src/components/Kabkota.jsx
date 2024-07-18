import { FileInput, Label, Button, TextInput } from "flowbite-react";
import React, { useState } from 'react';
import axios from 'axios';
import GeojsonList from './GeojsonList'; // Pastikan path sesuai dengan struktur proyek Anda

export function Kabkota({fetchGeojsonData}) {
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
    <div className="flex flex-wrap gap-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <Label htmlFor="file" value="Upload file" />
          <FileInput id="file" helperText="A profile picture is useful to confirm you are logged into your account" type="file" accept=".geojson" onChange={handleFileChange} />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="namobj" value="Nama GeoJSON" />
          <TextInput id="namobj" type="text" value={NAMOBJ} onChange={(e) => setNAMOBJ(e.target.value)} placeholder="Enter GeoJSON name" />
        </div>
        
        <Button pill type="submit">Upload</Button>
      </form>
  
      {/* <GeojsonList geojsonNames={geojsonNames} setGeojsonNames={setGeojsonNames} /> */}
    </div>
  );
}
