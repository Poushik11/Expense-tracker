import "./App.css";
/* eslint-disable react/prop-types */
import Friend from "./friend";

function List({ Friends, selectedFriend, onSelection }) {
  const friends = Friends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default List;
