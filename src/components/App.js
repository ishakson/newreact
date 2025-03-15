

import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";


export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => setItems((prev) => [...prev, item]);
  const handleDeleteItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id));
  const handleToggleItem = (id) => setItems((prev) => prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  const handleClearList = () => window.confirm("Are you sure you want to clear the list?") && setItems([]);

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}
