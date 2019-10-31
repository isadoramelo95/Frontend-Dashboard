import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "@material-ui/icons";

import "./styles.css";

function App(props) {
  return (
    <>
      <div className="nav">
        <h1 className="rb">Reembolso App</h1>
        <p className="bv">Bem-Vindo</p>
        <img src="https://ui-avatars.com/api/?name=Adalberto+Flores&rounded=true&size=40" />
      </div>
      <div className="main">
        <div className="body">
          <h1>Cadastrar Perfil</h1>
          <form onSubmit="perfil">
            <label htmlFor="perfil">Perfil</label>
            <br />
            <input
              className="input-perfil"
              type="perfil"
              placeholder="Digite um novo perfil"
              text-align="center"
            />
            <input
              className="button-incluir"
              type="button"
              value="Incluir Perfil"
            />
          </form>
          <h4>Perfis Cadastrados</h4>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Perfil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Diretor</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Gestor</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Gestor de Projetos</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Desenvolvedor</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Estagiário</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Externo/Outros</td>
              </tr>
            </tbody>
          </table>
          <form>
            <input className="button-salvar" type="button" value="Salvar" />
          </form>
        </div>
        <div className="sidebar">
          <Menu />
          <h2 className="side-item">Menu</h2>
          <div className="sidebar-user">
            <p className="side-item">Novo Lançamento</p>
            <p className="side-item">Meus Lançamentos</p>
            <p className="side-item">Meu Perfil</p>
          </div>
          <div className="sidebar-adm">
            <h2 className="side-item">ADM</h2>
            <p className="side-item">Usuários</p>

            <p className="side-item">Perfis</p>
            <p className="side-item">Projetos</p>
            <p className="side-item">Clientes</p>
            <p className="side-item">Tipos Despesa</p>
          </div>
        </div>
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
