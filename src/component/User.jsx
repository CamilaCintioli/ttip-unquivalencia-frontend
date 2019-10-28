/* eslint-disable import/no-duplicates */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import columns from './User/colums';
import { setUsers } from '../redux/actions/user';
import API from '../service/FileService';
import { openSnackbar } from './FeedbackBar';
import FeedbackBar from './FeedbackBar';


const createUserErrorMessage = (error) => {
  switch (error.response.data[0]) {
    case "should have required property 'name'":
      return 'Por favor complete el nombre del nuevo usuario';
    case "should have required property 'lastName'":
      return 'Por favor complete el apellido del nuevo usuario';
    case "should have required property 'email'":
      return 'Por favor complete el email del nuevo usuario';
    case "should have required property 'role'":
      return 'Por favor seleccione el rol del nuevo usuario';
    case 'Ya existe el email':
      return 'Ya existe un usuario con ese email';
    default:
      return 'Hubo un problema. Intente crear un usuario más tarde';
  }
};

class User extends Component {
  componentDidMount() {
    return this.updateUser();
  }

  updateUser() {
    return API.getUsersAxios()
      .then((users) => {
        this.props.setUsers(users);
      });
  }

  addUser(user) {
    return API.addUserAxios(user)
      .then(() => { this.updateUser(); openSnackbar('El usuario ha sido creado exitosamente', 'success'); })
      .catch((error) => { openSnackbar(createUserErrorMessage(error), 'error'); });
  }

  render() {
    const { users } = this.props;

    return (
      <>
        <MaterialTable
          title="Usuarios"
          columns={columns}
          data={users}
          editable={{
            onRowAdd: (newData) => this.addUser(newData),
            onRowUpdate: (newData, oldData) => new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 600);
            }),
            onRowDelete: (oldData) => new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 600);
            }),
          }}
        />
        <FeedbackBar />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users,
});

const mapDispatchToProps = {
  setUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
