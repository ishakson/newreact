import React, { useState } from "react";
import Item from "./Item";
export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "description") return a.description.localeCompare(b.description);
      if (sortBy === "packed") return Number(a.packed) - Number(b.packed);
      return 0;
    });
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          {items.length > 0 && <button onClick={onClearList}>Clear list</button>}
        </div>
      </div>
    );
  }
  
  