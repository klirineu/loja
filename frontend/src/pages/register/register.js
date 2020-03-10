import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import api from "../../services/api";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password1 === "") {
      alert("Todos os campos são obrigatorios");
    }

    if (password1 !== password) {
      alert("Senhas devem ser iguais");
    }

    api
      .post("/users", { name, email, password })
      .then(res => {
        props.history.push("/");
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="main-register">
      <div className="register">
        <h2>Criar conta</h2>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Seu nome"
        />
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <strong>Senha deve ter no minimo 6 caracteres.</strong>
        <input
          type="password"
          onChange={e => setPassword1(e.target.value)}
          placeholder="Insira a senha novamente"
        />
        <button onClick={e => handleSubmit(e)}>Criar conta</button>
        <strong className="login">
          Já tenho uma conta!{" "}
          <Link to="/login" className="link">
            fazer login
          </Link>
        </strong>
      </div>
    </div>
  );
}
