export default function Footer({items}) {
    if(items.length === 0) return <footer className="stats">Tidak ada barang di daftar belanjaan</footer> // Jika tidak ada item di daftar belanjaan, maka tampilkan pesan "Tidak ada barang di daftar belanjaan
  
    const totalItems = items.length; // Menghitung total item yang ada di daftar belanjaan
    const checkedItems = items.filter((item) => item.checked).length; // Menghitung item yang sudah di ceklis
    const percentage = Math.round((checkedItems / totalItems) * 100); // Menghitung persentase item yang sudah di ceklis
    return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)</footer>
  }