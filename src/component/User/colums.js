const columns = [
  { title: 'Nombre', field: 'name' },
  { title: 'Apellido', field: 'lastName' },
  { title: 'Email', field: 'email', editable: 'never' },
  { title: 'Role', field: 'role', lookup: { admin: 'administrador', user: 'usuario', professor: 'docente' } },
];

export default columns;
