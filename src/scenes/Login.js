import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <h2>Login</h2>;
      <p>
        Not a user? <Link to="signup">Sign in </Link>
      </p>
    </>
  );
}
