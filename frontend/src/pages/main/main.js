import React, { useState, useEffect } from "react";

import "./style.css";

import api from "../../services/api";

export default function Main() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    var input = document.getElementById("input-pesquisa");
    var link = document.getElementById("link-tela-login");
    var carrinho = document.getElementById("carrinho");

    carrinho.style.display = "block";
    input.style.display = "block";
    link.style.display = "block";
    function handleProdutos() {
      api
        .get("/categoria/Celulares")
        .then(res => {
          setProdutos(res.data.produtos);
        })
        .catch(error => {
          console.log(error);
        });
    }

    handleProdutos();
  }, []);

  return (
    <div className="main">
      <ul>
        {produtos.map(celulares => (
          <li key={celulares.id}>
            <img src={celulares.img_url} alt="" />
            <p>
              <strong>{celulares.title}</strong>
              <br />
              <strong>preço: {celulares.price}</strong>
            </p>
            <button title="mais informações">+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
