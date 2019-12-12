/* eslint-disable react/prop-types */
import React from 'react';
import { map } from 'lodash';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


const TableSubject = ({
  isSearch, row, handleSearchRequest,
}) => {
  const classes = useStyles();

  return (
    <div className="row justify-content-md-center">
      <div className="col-8">
        <span><b>Materias de origen</b></span>
        <table className="table table-sm">
          <thead className="thead-dark">
            <tr>
              {isSearch ? <th scope="col">Aciones</th> : null}
              <th scope="col">Nombre</th>
              <th scope="col">Universidad</th>
              <th scope="col">Carrera</th>
              <th scope="col">Plan</th>
            </tr>
          </thead>
          <tbody>
            {map(row.originSubjects, (materia, i) => (
              <tr key={i}>
                {isSearch
                  ? (
                    <Button color="primary" type="button" className={classes.button} onClick={() => handleSearchRequest(row.id, materia.id)}>
                      Ver
                    </Button>
                  )
                  : null}
                <td>{materia.subject}</td>
                <td>{materia.university}</td>
                <td>{materia.career}</td>
                <td>{materia.yearPlan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSubject;
