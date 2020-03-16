import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import api from "../../services/api";

export default function A_s() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(0);
  const [cpf, setCpf] = useState(0);
  const token = localStorage.getItem("token");
  const Auth = `Bearer ${token}`;

  useEffect(() => {
    var input = document.getElementById("input-pesquisa");
    var link = document.getElementById("link-tela-login");
    var carrinho = document.getElementById("carrinho");
    var modalConta = document.getElementById("modal-conta");

    modalConta.style.display = "none";
    carrinho.style.display = "block";
    input.style.display = "block";
    link.style.display = "block";
    function handleUser() {
      if (token) {
        api.get("/users", { headers: { Authorization: Auth } }).then(res => {
          setUser(res.data);
        });
      }
    }
    handleUser();
  }, [token, Auth]);

  function handleUpdate(valor) {
    var valores = {
      name: () => {
        api
          .put("/users", { name }, { headers: { Authorization: Auth } })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
      email: () => {
        api
          .put("/users", { email }, { headers: { Authorization: Auth } })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
      password: () => {
        api
          .put("/users", { password }, { headers: { Authorization: Auth } })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
      number: () => {
        api
          .put("/users", { number }, { headers: { Authorization: Auth } })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
      cpf: () => {
        api
          .put("/users", { cpf }, { headers: { Authorization: Auth } })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    };
    valores[valor]();
  }

  function openModal(valor) {
    var modal = document.getElementById(valor);
    modal.style.display = "block";
  }

  function closeModal(valor, e) {
    e.preventDefault();
    var modal = document.getElementById(valor);
    modal.style.display = "none";
  }

  return (
    <div className="main-a_s">
      <div className="a_s">
        <ul>
          <li>
            Nome: {user.name}{" "}
            <button onClick={() => openModal(1)}>Editar</button>
            <div id="1" className="modal">
              <div className="modal-content">
                <strong>
                  Para fazer alteração digite e clique em salvar ou cancelar
                  para sair
                </strong>
                <form action="">
                  <input
                    type="text"
                    placeholder="Nome:"
                    onChange={e => setName(e.target.value)}
                  />
                  <button onClick={e => closeModal(1, e)}>Cancelar</button>
                  <button onClick={() => handleUpdate("name")}>Enviar</button>
                </form>
              </div>
            </div>
          </li>
          <li>
            Email: {user.email}{" "}
            <button onClick={() => openModal(2)}>Editar</button>
            <div id="2" className="modal">
              <div className="modal-content">
                <strong>
                  Para fazer alteração digite e clique em salvar ou cancelar
                  para sair
                </strong>
                <form action="">
                  <input
                    type="text"
                    placeholder="Email:"
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button onClick={e => closeModal(2, e)}>Cancelar</button>
                  <button onClick={() => handleUpdate("email")}>Enviar</button>
                </form>
              </div>
            </div>
          </li>
          <li>
            Número celular:{" "}
            {user.number ? (
              <div>
                <button onClick={() => openModal(3)}>Editar</button>
                <div id="3" className="modal">
                  <div className="modal-content">
                    <strong>
                      Para fazer alteração digite e clique em salvar ou cancelar
                      para sair
                    </strong>
                    <form action="">
                      <input
                        type="text"
                        placeholder="Número:"
                        onChange={e => setNumber(e.target.value)}
                      />
                      <button onClick={e => closeModal(3, e)}>Cancelar</button>
                      <button onClick={() => handleUpdate("number")}>
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <button className="button-add" onClick={() => openModal(4)}>
                  Adicionar
                </button>

                <div id="4" className="modal">
                  <div className="modal-content">
                    <strong>
                      Para fazer alteração digite e clique em salvar ou cancelar
                      para sair
                    </strong>
                    <form action="">
                      <input
                        type="text"
                        placeholder="Nome:"
                        onChange={e => setName(e.target.value)}
                      />
                      <button onClick={e => closeModal(4, e)}>Cancelar</button>
                      <button onClick={() => handleUpdate("name")}>
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            Senha: ****** <button onClick={() => openModal(5)}>Editar</button>
            <div id="5" className="modal">
              <div className="modal-content">
                <strong>
                  Para fazer alteração digite e clique em salvar ou cancelar
                  para sair
                </strong>
                <form action="">
                  <input
                    type="password"
                    placeholder="Senha:"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button onClick={e => closeModal(5, e)}>Cancelar</button>
                  <button onClick={() => handleUpdate("password")}>
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </li>
          <li>
            CPF: ******{" "}
            {user.cpf ? (
              <div>
                <button onClick={() => openModal(6)}>Editar</button>
                <div id="6" className="modal">
                  <div className="modal-content">
                    <strong>
                      Para fazer alteração digite e clique em salvar ou cancelar
                      para sair
                    </strong>
                    <form action="">
                      <input
                        type="text"
                        placeholder="cpf:"
                        onChange={e => setCpf(e.target.value)}
                      />
                      <button onClick={e => closeModal(6, e)}>Cancelar</button>
                      <button onClick={() => handleUpdate("cpf")}>
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <button className="button-add" onClick={() => openModal(7)}>
                  Adicionar
                </button>
                <div id="7" className="modal">
                  <div className="modal-content">
                    <strong>
                      Para fazer alteração digite e clique em salvar ou cancelar
                      para sair
                    </strong>
                    <form action="">
                      <input
                        type="text"
                        placeholder="Nome:"
                        onChange={e => setName(e.target.value)}
                      />
                      <button onClick={e => closeModal(7, e)}>Cancelar</button>
                      <button onClick={() => handleUpdate("name")}>
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="button-cld">
        <Link to="/dashboard">
          <button>Concluido</button>
        </Link>
      </div>
    </div>
  );
}
