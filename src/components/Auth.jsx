import { useState } from "react";
import { auth } from "../firebase";
import "./Auth.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types"; // Import PropTypes

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      setUser(userCredential.user); // Correctly update the user state
    } catch (error) {
      console.error("Error with authentication:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <button
          className="toggle-button"
          onClick={() => setIsSignup((prev) => !prev)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

// Add PropTypes validation
Auth.propTypes = {
  setUser: PropTypes.func.isRequired, // Validate setUser as a required function
};

export default Auth;