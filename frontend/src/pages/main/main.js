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

  function openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }

  function closeModal(id, e) {
    e.preventDefault();
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }

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
            <button
              title="mais informações"
              onClick={() => openModal(celulares.id)}
            >
              +
            </button>
            <div id={celulares.id} className="modal">
              <div className="modal-content">
                <button
                  className="close-button"
                  onClick={e => closeModal(celulares.id, e)}
                >
                  x
                </button>

                <img src={celulares.img_url} alt="" />

                <strong className="title">{celulares.title}</strong>

                <strong className="details">{celulares.info}</strong>
                <div className="buttons">
                  <button>adicionar no carrinho</button>
                  <button>comprar agora</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
