import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        data.deletedCount > 0 && alert("deleted successfully");
        const remaining = users.filter((user) => user._id !== id);
        setUsers(remaining);
      });
  };
  return (
    <div>
      <p>
        <Link to="/users">All Users</Link> <Link to="/">Home</Link>
      </p>
      <h2>Welcome to Users page</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} & {user.email} ||{" "}
          <Link to={`/user/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
