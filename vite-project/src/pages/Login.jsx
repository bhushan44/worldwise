import { useAuth } from "../contexts/AuthContext";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  let { login, isAuthenticated } = useAuth();
  let navigate = useNavigate();
  console.log(isAuthenticated);
  useEffect(
    function () {
      if (isAuthenticated) navigate("/homepage", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  return (
    <main className={styles.login}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button
            type="primary"
            onClick={(e) => {
              e.preventDefault();
              if (email && password) {
                login(email, password);
              }
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
