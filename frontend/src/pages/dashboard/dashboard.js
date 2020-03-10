import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Dashboard() {
  useEffect(() => {
    var input = document.getElementById("input-pesquisa");
    var link = document.getElementById("link-tela-login");
    var carrinho = document.getElementById("carrinho");

    carrinho.style.display = "block";
    input.style.display = "block";
    link.style.display = "block";
  });
  return (
    <div className="main-dashboard">
      <Link className="link" to="/a_s">
        <div className="card-dashboard">Acesso e segurança</div>
      </Link>
      <div className="card-dashboard">Endereços</div>
      <div className="card-dashboard">Opções de pagamento</div>
    </div>
  );
}
