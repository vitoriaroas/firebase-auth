import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`You are signed up! Email: ${email} `)
    }

  return (
    <>
      <h2>Signup</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label> Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label> Password:
         <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Sign up"  />
      </form>
      <p>
        Already a user? <Link to="login">Login</Link>
      </p>
    </>
  );
}
