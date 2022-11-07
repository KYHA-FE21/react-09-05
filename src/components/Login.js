import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user.email === email) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // kolla om det finns en user med samma epost
    // vi behöver skriva en funktion för att göra en check

    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkEmail(res.data, email))
      .catch((error) => {
        alert("Error");
      });

    console.log(user);
    console.log(user.email);

    if (user.email === email) {
      alert("Success!");

      // om login success ska vi spara user i localstorage
      localStorage.setItem("user", JSON.stringify(user.id));
    }
    setEmail("");
  };

  return (
    <form>
      <div>
        <input
          onChange={handleChange}
          type="text"
          value={email}
          placeholder="Email"
        />
      </div>
      <button typw="submit" onClick={handleSubmit}>
        Log in
      </button>
    </form>
  );
};

export default Login;
