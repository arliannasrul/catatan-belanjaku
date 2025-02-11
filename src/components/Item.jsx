export default function Item({item, onDeleteItem, onToggleItem}) {
    return (
      <li className="item" key={item.id}>
        <input type="checkbox"checked= {item.checked} onChange={() => onToggleItem(item.id)} />
        <span style ={ item.checked ? {textDecoration:"line-through" }: {} }>{item.name}  <span className="unit">{item.amount} {item.unit}</span> </span> {/*apakah item sudah di ceklis atau belum, jika sudah maka tambahkan texDecorationnya "line-through", jikia belum tidak terjadi apa-apa*/}
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>  {/* {() => itu anonymous function supaya funtion tidak langsung dieksekusi*/}
      </li>
    );
  }
  //<span style ={ item.checked ? {textDecoration:"line-through" }: {} }> 