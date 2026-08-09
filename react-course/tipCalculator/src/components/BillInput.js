

const BillInput = ({ billInput, onBillInput }) => {
  return (
    <div className="bill-input">
      <p>How much was the bill?</p>
      <input
        type="text"
        value={billInput}
        onChange={(e) => onBillInput(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
