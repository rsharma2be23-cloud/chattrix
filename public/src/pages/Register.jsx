import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { registerRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

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
    const { password, confirmpassword, username, email } = values;
    if (password !== confirmpassword) {
      toast.error("Passwords do not match", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("Username too short", toastOptions);
      return false;
    } else if (password.length < 4) {
      toast.error("Password too short", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email required", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

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
          <p>Create your account</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </form>

          <span>
            Already have an account? <Link to="/login">Login</Link>
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
  background: radial-gradient(circle at top, #1e1b4b, #020617);
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(20px);
    padding: 3rem;
    border-radius: 20px;
    width: 380px;
    text-align: center;
    box-shadow: 0 0 25px #7c3aed;
    animation: fade 0.6s ease;
  }

  h1 {
    color: #c084fc;
    margin-bottom: 0.5rem;
  }

  p {
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
    background: rgba(255,255,255,0.08);
    color: white;
  }

  button {
    padding: 0.9rem;
    border-radius: 8px;
    border: none;
    background: linear-gradient(45deg,#7c3aed,#a855f7);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #a855f7;
  }

  span {
    display: block;
    margin-top: 1.5rem;
    color: #bbb;
  }

  a {
    color: #c084fc;
    font-weight: bold;
    text-decoration: none;
  }

  @keyframes fade {
    from {opacity:0; transform: translateY(20px);}
    to {opacity:1; transform: translateY(0);}
  }
`;
