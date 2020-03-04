import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import api from "../../services/api";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    api
      .post("/users/authenticate", { email, password })
      .then(res => {
        props.history.push("/");
        //props.history.go(0);
        localStorage.setItem("token", res.data.token);
        window.location.reload();
        console.log(res.data.token);
      })
      .catch(error => {
        alert("Email ou senha invalidos");
      });
  }

  return (
    <div className="main-login">
      <div className="login">
        <h2>Fazer login</h2>
        <div className="input">
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
        </div>

        <button onClick={e => handleSubmit(e)}>Entrar</button>
      </div>
      <div className="cadastro">
        <strong>Cadastrar-se</strong>
        <Link to="/register">
          <button>Criar conta</button>
        </Link>
      </div>
    </div>
  );
}
