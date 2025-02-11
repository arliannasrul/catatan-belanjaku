import React, { useState } from 'react';

export default function Form({onAddItem}) {    // Form component merupakan komponen yang menampilkan form untuk menambahkan item belanjaan
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(1);
  const [unit, setUnit] = useState('kg');
  function handleSubmit(e) {  
    e.preventDefault();

    if(!name) return;   // Jika input nama barang kosong, maka hentikan eksekusi kode selanjutnya
    
    const newItem = {
      id: Date.now(),
      name,
      amount,
      unit,
      checked: false,
    };
    onAddItem(newItem);
    console.log(newItem); 

    setName('');    // Mengosongkan form setelah submit
    setAmount(1);
    setUnit('kg');
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div className="form-group">
        <input className= "jumlah" type="number" min="1" placeholder="Jumlah" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
        <select placeholder="Satuan" value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="kg">kg</option>
            <option value="gram">gram</option>
            <option value="liter">liter</option>
            <option value="meter">meter</option>
            <option value="pcs">biji</option>
          </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button>Tambah</button>    
    </form>
  );
}