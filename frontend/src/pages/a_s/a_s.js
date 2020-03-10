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

  function handleUpdate(valor, e) {
    e.preventDefault();
    console.log(valor);

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
  /**<input type="text" onChange={e => setName(e.target.value)} />
        <button onClick={e => handleUpdate("name", e)}>teste</button> */
  return (
    <div className="main-a_s">
      <div className="a_s">
        <ul>
          <li>
            Nome: {user.name} <button>Editar</button>
          </li>
          <li>
            Email: {user.email} <button>Editar</button>
          </li>
          <li>
            Número celular:{" "}
            {user.number ? (
              <button>Editar</button>
            ) : (
              <button className="button-add">Adicionar</button>
            )}
          </li>
          <li>
            Senha: ****** <button>Editar</button>
          </li>
          <li>
            CPF: ******{" "}
            {user.cpf ? (
              <button>Editar</button>
            ) : (
              <button className="button-add">Adicionar</button>
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
