/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Button from "./Button";
// eslint-disable-next-line react/prop-types
function Bill({ selectedFriend, onSplitBill }) {
  const [usermoney, setUsermoney] = useState("");
  const [xmoney, setXmoney] = useState("");
  const [option, setOption] = useState("Pay");

  function handleSubmit(e) {
    e.preventDefault();
    if (!usermoney && !xmoney) return;
    console.log(usermoney);
    onSplitBill(option === "Pay" ? usermoney : -xmoney);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2 className="expense">Expense Tracker:</h2>

      <label>Pay/Take</label>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="Pay">Pay</option>
        <option value="Receive">Receive</option>
      </select>

      <label>Your Money:</label>
      <input
        type="text"
        value={usermoney}
        onChange={(e) => setUsermoney(Number(e.target.value))}
        disabled={option === "Receive"}
      />

      <label>{selectedFriend.name}'s Money:</label>
      <input
        type="text"
        value={xmoney}
        onChange={(e) => setXmoney(Number(e.target.value))}
        disabled={option === "Pay"}
      />

      <Button className="button">Track Expense</Button>
    </form>
  );
}

export default Bill;
