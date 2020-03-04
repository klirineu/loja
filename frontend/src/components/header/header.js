import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import carrinho from "../../img/carrinho3.png";
import api from "../../services/api";

export default function Header(props) {
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  const Auth = `Bearer ${token}`;

  useEffect(() => {
    function handleUser() {
      if (token) {
        api.get("/users", { headers: { Authorization: Auth } }).then(res => {
          setUser(res.data.name);
        });
      }
    }
    handleUser();
  }, [token, Auth]);

  function telaLogin() {
    var input = document.getElementById("input-pesquisa");
    var link = document.getElementById("link-tela-login");
    var carrinho = document.getElementById("carrinho");
    carrinho.style.display = "none";
    input.style.display = "none";
    link.style.display = "none";
  }

  function telaMain() {
    var input = document.getElementById("input-pesquisa");
    var link = document.getElementById("link-tela-login");
    var carrinho = document.getElementById("carrinho");

    carrinho.style.display = "block";
    input.style.display = "block";
    link.style.display = "block";
  }

  function focusOn() {
    var modal = document.getElementById("modal-conta");
    modal.style.display = "block";
  }

  function focusOff() {
    var modal = document.getElementById("modal-conta");
    modal.style.display = "none";
  }

  function logOff() {
    window.location.href = "/login";
    localStorage.clear();
  }

  return (
    <header className="main-header">
      <Link to="/" className="  link" id="logo" onClick={telaMain}>
        LOJA
      </Link>
      <input id="input-pesquisa" type="text" placeholder="pesquisar" />

      {token ? (
        <strong
          onMouseOver={focusOn}
          onMouseOut={focusOff}
          className="conta"
          id="link-tela-login"
        >
          <Link to="/dashboard" className="name-user">
            {user}
          </Link>
          <div id="modal-conta">
            <strong onClick={logOff}>sair</strong>
          </div>
        </strong>
      ) : (
        <Link
          className="link"
          id="link-tela-login"
          to="/login"
          onClick={telaLogin}
        >
          Login
        </Link>
      )}

      <img id="carrinho" src={carrinho} alt="" />
    </header>
  );
}
