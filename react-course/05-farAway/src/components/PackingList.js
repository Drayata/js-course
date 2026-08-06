import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItems, onToggleItem, onClearItems }) => {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;
  if (sortedBy === "input") {
    sortedItems = items;
  } else if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input"> Sorted By Input</option>
          <option value="description"> Sorted By Description</option>
          <option value="packed"> Sorted By Packed</option>
        </select>
        <button onClick={onClearItems}>Clear Items</button>
      </div>
    </div>
  );
};

export default PackingList;
