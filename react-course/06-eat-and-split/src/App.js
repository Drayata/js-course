import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showSplitBill, setShowSplitBill] = useState(false);
  const isShow;

  const handleShowAddFriend = () => {
    setShowAddFriend((s) => !s);
  };

  const handleshowSplitBill = (selected) => {
    setSelectedFriend((s) => selected);
    setShowSplitBill((show) => !show);
  };

  const handleAddNewFriend = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          handleshowSplitBill={handleshowSplitBill}
          friends={friends}
        />
        {showAddFriend && <FormAddFriend onAddNewFriend={handleAddNewFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Cancel" : "Add Friend"}
        </Button>
      </div>

      {showSplitBill && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};

const FriendList = ({ handleshowSplitBill, friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleshowSplitBill={handleshowSplitBill}
        />
      ))}
    </ul>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

const Friend = ({ friend, handleshowSplitBill }) => {
  return (
    <li>
      <img src={friend.image} alt="friend.name" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      <Button onClick={() => handleshowSplitBill(friend)}>Select</Button>
    </li>
  );
};

const FormAddFriend = ({ onAddNewFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onAddNewFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>😎 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>😎Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input type="text" />

      <label>😎Your expense</label>
      <input type="text" />

      <label>😎😎X's expense</label>
      <input type="text" disabled />

      <label>😎Who's paying</label>
      <select>
        <option value="you">You</option>
        <option value="x">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default App;
