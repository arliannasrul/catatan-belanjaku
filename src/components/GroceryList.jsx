import React, { useState } from 'react';
import Item from './Item'; // Import Item component

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {      // GroceryList component merupakan komponen yang menampilkan daftar belanjaan
  const [sortBy, setSortrBY] = useState('input') //

  let sortedItems;

  if (sortBy == 'input') {
    sortedItems = items;
  }

  if (sortBy == 'name') {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name)); // 
  }  // items.slice() digunakan untuk membuat array baru, agar array items tidak berubah

  if (sortBy == 'checked') {
    sortedItems = items.slice().sort((a, b) => a.checked - b.checked); //checked - b.checked akan menghasilkan nilai 1 atau -1, jika a.checked lebih besar dari b.checked maka hasilnya 1, jika a.checked lebih kecil dari b.checked maka hasilnya -1
  } // Mengurutkan item berdasarkan ceklis, item yang sudah di ceklis akan berada di atas

  /*
  switch(sortBy) {
    case 'name' ;
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'checked' ;
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
  }
  */   // bisa juga Menggunakan switch case untuk mengganti if else

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => ( // Menggunakan sortedItems sebagai array yang akan di map
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select className="value" value={sortBy} onChange={(e) => setSortrBY(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>  {/* Menghapus semua item yang ada di daftar belanjaan, tanpa anonymous function karena tidak mengirimkan parameter*/}
      </div>
    </>
  );
}