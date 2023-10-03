//import React, { useState, useEffect } from "react";
import "./Contactos.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

const url = "http://localhost:3000/v1/public/client/contact";

class Contactos extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      id: "",
      nombre: "",
      numeroCuenta: "",
      descripcion: "",
      tipoModal: "",
    },
  };

  peticionGet = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.id;
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPut = () => {
    axios.put(url + this.state.form.id, this.state.form).then((response) => {
      this.modalInsertar();
      this.peticionGet();
    });
  };

  peticionDelete = () => {
    axios.delete(url + this.state.form.id).then((response) => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
    });
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  seleccionarContacto = (contacto) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: contacto.id,
        nombre: contacto.nombre,
        description: contacto.description,
        numeroCuenta: contacto.numeroCuenta,
      },
    });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const { form } = this.state;
    return (
      <div className="Contactos">
        <Navbar />
        <div className="container-Contacto">
          <div className="wrapper-Contacto">
            <div className="Usuario-wrapper">
              <div>
                <div className="usuario-Contacto">
                  Bienvenido(a): <span>José Jiménez</span>
                </div>
                <div className="usuario-Contacto">
                  Última Conexión - 17/06/2023 - 12:43:30 p.m.
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({ form: null, tipoModal: "insertar" });
              this.modalInsertar();
            }}
          >
            Agregar Contacto
          </button>
          <br />
          <br />
          <table className="table ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Número de Cuenta</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((contacto) => {
                return (
                  <tr>
                    <td>{contacto.id}</td>
                    <td>{contacto.nombre}</td>
                    <td>{contacto.descripcion}</td>
                    <td>
                      {new Intl.NumberFormat("en-EN").format(
                        contacto.capital_bursatil
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.seleccionarContacto(contacto);
                          this.modalInsertar();
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      {"   "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.seleccionarContacto(contacto);
                          this.setState({ modalEliminar: true });
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader style={{ display: "block" }}>
              <span
                style={{ float: "right" }}
                onClick={() => this.modalInsertar()}
              >
                x
              </span>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  className="form-control"
                  type="text"
                  name="id"
                  id="id"
                  readOnly
                  onChange={this.handleChange}
                  value={form ? form.id : this.state.data.length + 1}
                />
                <br />
                <label htmlFor="nombre">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  id="nombre"
                  onChange={this.handleChange}
                  value={form ? form.nombre : ""}
                />
                <br />
                <label htmlFor="nombre">Descripción</label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  id="description"
                  onChange={this.handleChange}
                  value={form ? form.description : ""}
                />
                <br />
                <label htmlFor="capital_bursatil">alias</label>
                <input
                  className="form-control"
                  type="text"
                  name="capital_bursatil"
                  id="capital_bursatil"
                  onChange={this.handleChange}
                  value={form ? form.capital_bursatil : ""}
                />
              </div>
            </ModalBody>

            <ModalFooter>
              {this.state.tipoModal == "insertar" ? (
                <button
                  className="btn btn-success"
                  onClick={() => this.peticionPost()}
                >
                  Insertar
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => this.peticionPut()}
                >
                  Actualizar
                </button>
              )}
              <button
                className="btn btn-danger"
                onClick={() => this.modalInsertar()}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
              Estás seguro que deseas eliminar el Contacto {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-danger"
                onClick={() => this.peticionDelete()}
              >
                Sí
              </button>
              <button
                className="btn btn-secundary"
                onClick={() => this.setState({ modalEliminar: false })}
              >
                No
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
export default Contactos;
