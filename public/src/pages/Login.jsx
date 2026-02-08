import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { loginRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    theme: "dark",
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (!username || !password) {
      toast.error("Enter username & password", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, { username, password });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

  return (
    <>
      <Container>
        <div className="card">
          <h1>Chattrix 💬</h1>
          <p className="subtitle">Welcome back</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>

          <span>
            Don’t have an account? <Link to="/register">Register</Link>
          </span>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f172a, #020617);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", sans-serif;

  .card {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.06);
    padding: 3rem;
    border-radius: 20px;
    width: 350px;
    text-align: center;
    box-shadow: 0 0 40px rgba(0,0,0,0.4);
    animation: fadeIn 0.6s ease;
  }

  h1 {
    color: #a78bfa;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: #aaa;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.9rem;
    border-radius: 8px;
    border: none;
    outline: none;
    background: rgba(255,255,255,0.1);
    color: white;
  }

  button {
    padding: 0.9rem;
    border-radius: 8px;
    border: none;
    background: #7c3aed;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #6d28d9;
    transform: scale(1.03);
  }

  span {
    display: block;
    margin-top: 1.5rem;
    color: #bbb;
  }

  a {
    color: #a78bfa;
    text-decoration: none;
    font-weight: bold;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
