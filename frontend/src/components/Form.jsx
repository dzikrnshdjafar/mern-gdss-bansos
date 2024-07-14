// Form.jsx

import React from 'react';

const FormKabKotaFile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form File Kabupaten/Kota submitted!');
  };

  return (
    <div className="form">
      <h2>Form Input File Kabupaten/Kota</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Upload File:
          <input type="file" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const FormKabKotaData = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Kabupaten/Kota submitted!');
  };

  return (
    <div className="form">
      <h2>Form Input Data Kabupaten/Kota</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Kabupaten/Kota:
          <input type="text" />
        </label>
        <br />
        <label>
          Alamat:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const FormMasyarakat = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Masyarakat submitted!');
  };

  return (
    <div className="form">
      <h2>Form Input Masyarakat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input type="text" />
        </label>
        <br />
        <label>
          Alamat:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Form = ({ type }) => {
  return (
    <>
      {type === 'kabkotaFile' && <FormKabKotaFile />}
      {type === 'kabkotaData' && <FormKabKotaData />}
      {type === 'masyarakat' && <FormMasyarakat />}
    </>
  );
};

export default Form;
