const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Go adding some items.</em>
      </footer>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const persentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {persentage === 100
          ? `Every item packed. You are ready to go`
          : `You have ${numItems} items on your list, and you already packed
        ${packedItems} (${persentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
