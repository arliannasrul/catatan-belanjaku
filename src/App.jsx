import { useState } from "react";

const groceryItems = [
  { id: 1, name: "Telur", unit: "biji", amount: 10, checked: true },
  { id: 2, name: "Gula Pasir", unit: "kg", amount: 1, checked: true },
  { id: 3, name: "Air Mineral", unit: "liter", amount: 1, checked: false },
  { id: 4, name: "Garam", unit: "gram", amount: 500, checked: false },

]

export default function App() {
  const[items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item)));
  }

  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="app">
    <Header /> 
    <Form onAddItem={handleAddItem}/>
    <GroceryList items={items} onDeleteItem ={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems ={handleClearItems}/>
    <Footer />
  </div>
  
  );

}


function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
  
}

function Form({onAddItem}) {    // Form component merupakan komponen yang menampilkan form untuk menambahkan item belanjaan
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

function GroceryList( {items, onDeleteItem, onToggleItem, onClearItems}) {              // GroceryList component merupakan komponen yang menampilkan daftar belanjaan
  return (  
    <>
       <div className="list">
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
          ))}
        </ul>
      </div>     
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>  {/* Menghapus semua item yang ada di daftar belanjaan, tanpa anonymous function karena tidak mengirimkan parameter*/}
      </div>
    </>
  );
}

function Item({item, onDeleteItem, onToggleItem}) {
  return (
    <li key={item.id}>
      <input type="checkbox"checked= {item.checked} onChange={() => onToggleItem(item.id)} />
      <span style ={ item.checked ? {textDecoration:"line-through" }: {} }>{item.amount} {item.unit} {item.name}</span> {/*apakah item sudah di ceklis atau belum, jika sudah maka tambahkan texDecorationnya "line-through", jikia belum tidak terjadi apa-apa*/}
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>  {/* {() => itu anonymous function supaya funtion tidak langsung dieksekusi*/}
    </li>
  );
}
//<span style ={ item.checked ? {textDecoration:"line-through" }: {} }> 
function Footer() {
  return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
}