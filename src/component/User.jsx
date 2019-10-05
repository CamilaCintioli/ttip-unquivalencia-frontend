/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import columns from './User/colums';
import { setUsers } from '../redux/actions/user';
import API from '../service/FileService';

class User extends Component {
  componentDidMount() {
    return this.updateUser();
  }

  updateUser() {
    return API.getUsersAxios()
      .then((users) => {
        this.props.setUsers(users);
      })
      .catch((err) => console.log(err));
  }

  addUser(user) {
    return API.addUserAxios(user)
      .then(() => this.updateUser())
      .catch((err) => console.log(err));
  }

  render() {
    const { users } = this.props;

    return (
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
