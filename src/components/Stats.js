export default function Stats({ items }) {
    if (items.length === 0) return <footer className="stats">No items added yet</footer>;
  
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((packedItems / items.length) * 100);
  
    return (
      <footer className="stats">
        {percentage === 100 ? (
          <em>🎉 Congrats! You're all set for your trip! 🎉</em>
        ) : (
          <em>You have packed {packedItems} out of {items.length} items. That's {percentage}%!</em>
        )}
      </footer>
    );
  }