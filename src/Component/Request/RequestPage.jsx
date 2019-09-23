import React, { Component } from 'react';
import './RequestPage.css';
import axios from 'axios';
import {
  Button, ButtonGroup, Grid, Container,
} from '@material-ui/core';
import UniversitySubjectData from './UniversitySubjectData';
import Dialogo from './dialogo';

const algoritmos = ['1-Concepto de algoritmo', '2-Resolución de problemas', '3-Diseño del algoritmo',
  '4-Programación del algoritmo', '5-Representación de algoritmos'];

const estructuras = ['1-Concepto de estructuras', '2-Listas', '3-Recursión sobre listas', '4-Arboles', '5-Recursion sobre árboles'];


class RequestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestId: undefined, // props.match.params.solicitudId,
      request: {},
      openDialogo: false,
    };

    this.giveEquivalence = this.giveEquivalence.bind(this);
    this.denyEquivalence = this.denyEquivalence.bind(this);
    this.consultEquivalence = this.consultEquivalence.bind(this);
  }

  componentDidMount() {
    axios.get(`//localhost:8000/api/v1/request/${this.state.requestId}`)
      .then((response) => {
        this.setState({ request: response.data });
      })
      .catch((response) => {
        console.log(response);
      });
  }

  giveEquivalence() {
    axios.post(`//localhost:8000/api/v1/request/${this.state.request.id}`, { equivalence: 'APROBADA' })
      .then((response) => {
        alert('Solicitud de equivalencia aprobada');
        console.log(response);
      })
      .catch((response) => {
        alert('error');
        console.log(response);
      });
  }

  denyEquivalence() {
    axios.post(`//localhost:8000/api/v1/request/${this.state.request.id}`, { equivalence: 'NEGADA' })
      .then((response) => {
        alert('Solicitud de equivalencia negada');
        console.log(response);
      })
      .catch((response) => {
        alert('error');
        console.log(response);
      });
  }

  consultEquivalence(email) {
    axios.post(`//localhost:8000/api/v1/request/${this.state.request.id}`, { equivalence: 'CONSULTADA' })
      .then((response) => {
        alert('Se envio consulta al profesor, al mail');
        console.log(response);
      })
      .catch((response) => {
        alert('error');
        console.log(response);
      });
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={6} spacing={3}>
              <UniversitySubjectData
                university={this.state.request.univesityOrigin}
                subject={this.state.request.subjectUnq}
                content={estructuras}
              />
            </Grid>
            <Grid item xs={6} spacing={3}>
              <UniversitySubjectData
                university="Universidad Nacional de Quilmes"
                subject={this.state.request.subjectOrigin}
                content={algoritmos}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="primary button "
          >
            <Button onClick={this.giveEquivalence}>DAR EQUIVALENCIA</Button>
            <Button onClick={this.denyEquivalence}>NEGAR EQUIVALENCIA</Button>
            <Dialogo consultEquivalence={this.consultEquivalence}>Consultar</Dialogo>
          </ButtonGroup>
        </Container>
      </Container>

    );
  }
}

export default RequestPage;
