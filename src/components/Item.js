export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li>
        <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
        <span className={item.packed ? "packed" : ""}>{item.description} - {item.quantity}</span>
        <button onClick={() => onDeleteItem(item.id)}>🗑️</button>
      </li>
    );
  }