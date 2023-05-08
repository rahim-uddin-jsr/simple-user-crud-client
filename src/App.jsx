import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          alert("user added successfully");
        }
      });
  };
  return (
    <>
      <p>
        <Link to="/users">All Users</Link> <Link to="/">Home</Link>
      </p>
      <h1>Add a User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" name="email" />
        <br />
        <input type="submit" value="Create User" />
      </form>
    </>
  );
}

export default App;
