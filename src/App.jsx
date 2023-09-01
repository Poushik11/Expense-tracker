import "./App.css";
import Add from "./Add";
import List from "./List";
import Button from "./Button";
import Bill from "./Bill";
import { useState } from "react";
const initialFriends = [];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedfriend] = useState(null);
  function handleShowAdd() {
    setShowAddFriend((e) => !e);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleselection(friend) {
    setSelectedfriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <div className="app">
      <p className="heading">Expense Tracker</p>
      <div className="sidebar">
        <List
          Friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleselection}
        />

        {showAddFriend && <Add onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAdd}>
          {showAddFriend ? "Close" : "Add New Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <Bill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;
