import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    // här skulle ni behöva göra lite error hantering
    // tex att man ska fylla i alla fält eller om en user redan är registrerad

    axios
      .post("http://localhost:6001/users", user)
      .then(alert("User created!"));

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Sign up
      </button>
    </form>
  );
};

export default Signup;
