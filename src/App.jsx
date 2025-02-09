

export default function App() {


  return (
    <div className="app">
    <h1>Catatan Belanjaku 📝</h1>
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div className="form-group">
        <input className= "jumlah" type="number" min="1" placeholder="Jumlah" />
        <select placeholder="Satuan">
            <option value="kg">kg</option>
            <option value="gram">gram</option>
            <option value="liter">liter</option>
            <option value="meter">meter</option>
            <option value="pcs">biji</option>
          </select>
        <input type="text" placeholder="nama barang..." />
      </div>
      <button>Tambah</button>
    </form>
    <div className="list">
    
      <ul>
        <li>
          <input type="checkbox" checked={true} />
          <span style={{textDecoration: "line-through"}}>10 pcs Kopi Kapal Api</span>
          <button>&times;</button>
        </li>
        <li>
          <input type="checkbox" checked={true} />
          <span style={{textDecoration: "line-through"}}>1 kg Gula Pasir</span>
          <button>&times;</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>1 liter Air Mineral</span>
          <button>&times;</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>500 gram Garam</span>
          <button>&times;</button>
        </li>
      </ul>
    </div>
    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
    <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
  </div>
  
  );

}


