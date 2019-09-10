import React, { Component, Fragment } from 'react';
import './RequestPage.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import UniversitySubjectData from './UniversitySubjectData';

const algoritmos = ['CONTENIDOS MINIMOS DE LA MATERIA:', '1-Concepto de algoritmo', '2-Resolución de problemas', '3-Diseño del algoritmo',
  '4-Programación del algoritmo', '5-Representación de algoritmos'];

const estructuras = ['CONTENIDOS MINIMOS DE LA MATERIA:', '1-Concepto de estructuras', '2-Listas', '3-Recursión sobre listas', '4-Arboles', '5-Recursion sobre árboles'];


class RequestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestId: props.match.params.solicitudId,
      request: {},
    };

    this.giveEquivalence = this.giveEquivalence.bind(this);
    this.denyEquivalence = this.denyEquivalence.bind(this);
    
  }

  componentDidMount() {
    axios.get(`//localhost:8000/api/v1/requests/${this.state.requestId}`)
      .then((response) => {
        this.setState({ request: response.data[0] });
      })
      .catch((response) => {
        console.log(response);
      });
  }

  giveEquivalence() {
    axios.post(`//localhost:8000/api/v1/request/${this.state.request.id}`, { equivalence: 'APROBADA' })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  denyEquivalence() {
    axios.post(`//localhost:8000/api/v1/request/${this.state.request.id}`, { equivalence: 'NEGADA' })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  
  render() {
    return (
          <>

                <div className="universitySubjects">
                    <div className="universitySubject">
                        <UniversitySubjectData university="Universidad Nacional de Quilmes" subject={this.state.request.subjectUnq} content={estructuras} />
                    </div>
                    <div className="universitySubject">
                        <UniversitySubjectData university={this.state.request.univesityOrigin} subject={this.state.request.subjectOrigin} content={algoritmos} />
                    </div>
                </div>
                <div className="buttons">

                    <Button onClick={this.giveEquivalence}>DAR EQUIVALENCIA</Button>
                    <Button onClick={this.denyEquivalence}>NEGAR EQUIVALENCIA</Button>
                    <Button>Consultar</Button>
                </div>
            </>
    );
  }
}

export default RequestPage;
