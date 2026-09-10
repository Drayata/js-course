// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(100);
  const [type1, setType1] = useState("USD");
  const [type2, setType2] = useState("USD");
  const [output, setOutput] = useState("Output");

  useEffect(() => {
    async function getConverted() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${type1}&to=${type2}`,
      );
      const data = await res.json();

      setOutput(data);
    }
    getConverted();
  }, [amount, type1, type2]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type1} onChange={(e) => setType1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={type2} onChange={(e) => setType2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output.rates}</p>
    </div>
  );
}
