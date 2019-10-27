/* eslint-disable react/button-has-type */
import React from 'react';
import { Image } from 'react-bootstrap';
import JsPDF from 'jspdf';
import Logo from './logo.jpeg';
import 'jspdf-autotable';

const generateLetter = () => {
  const pdf = new JsPDF('p', 'pt', 'letter');
  pdf.text('Hello world!', 10, 10);

  pdf.autoTable({
    body: [{
      id: 1,
      fileNumber: '0358/101',
      name: 'matematicas 3',
      surname: 'a',
      mail: 'a@gmail.com',
      dni: '4564548',
      yearNote: '2017',
      universityOrigin: 'UTN-FRLP',
      status: 10987987,
      createdAt: '2019-10-11T19: 25:37.078Z',
      updatedAt: '2019-10-11T19: 25:37.078Z',
    },
    {
      id: 2,
      fileNumber: '0358/102',
      name: 'algoritmos de programacion',
      surname: 'a',
      mail: 'a@gmail.com',
      dni: '4564548',
      yearNote: '2017',
      universityOrigin: 'UTN- FRLP',
      status: 17687687,
      createdAt: '2019-10-11T19: 25:37.078Z',
      updatedAt: '2019-10-11T19 :25:37.078Z',
    }],
    columns: [{ header: 'file number', dataKey: 'fileNumber' },
      { header: 'DNI', dataKey: 'dni' },
      { header: 'yearNote', dataKey: 'yearNote' },
      { header: 'universityOrigin', dataKey: 'universityOrigin' },
      { header: 'surname', dataKey: 'surname' },
      { header: 'Asignatura de origen', dataKey: 'name' },
      { header: 'Carga horaria semanal', dataKey: 'createdAt' },
      { header: 'id', dataKey: 'id' },
      { header: 'mail', dataKey: 'mail' },
      { header: 'Resolución del Director', dataKey: 'updatedAt' },
      { header: 'status', dataKey: 'status' }],
  });

  return pdf.save('test.pdf');
};

const Home = () => (
  <div className="row justify-content-md-center">
    <Image src={Logo} className=" img-fluid" alt="Responsive image" />
    <button onClick={generateLetter}>generate Letter</button>
  </div>
);

export default Home;
