import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderData = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch(`http://localhost:5000/update/${loaderData._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("updated successFully");
        }
      });
  };
  console.log(loaderData);
  return (
    <>
      <p>
        <Link to="/users">All Users</Link> <Link to="/">Home</Link>
      </p>
      <h1> Update User Profile</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={loaderData.name}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={loaderData.email}
        />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </>
  );
};

export default Update;
