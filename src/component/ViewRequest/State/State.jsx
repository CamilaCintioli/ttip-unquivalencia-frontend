import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MatchController from './Match/MatchController';
import PDF from './PDF/PDF';
import RequestData from './RequestData/RequestData';
import Subjects from './Subjects/Subjects';

export default function State({ request, requestsMatch, checkProfessor }) {
  const [estado, setEstado] = React.useState('');

  const handleOnClick = (value) => setEstado(value);

  const getState = () => {
    switch (estado) {
      case 'Solicitud':
        return <RequestData request={request} />;
      case 'Materia':
        return <Subjects request={request} />;
      case 'PDF':
        return <PDF request={request} />;
      case 'Historial':
        return (
          <MatchController
            requestsMatch={requestsMatch}
          />
        );
      default:
        return <RequestData request={request} />;
    }
  };

  console.log('ESTADO ACTUAL');
  console.log(estado);

  return (
    <>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <ButtonGroup
          color="secondary"
          size="large"
          aria-label="full width outlined button group"
        >
          <Button type="button" color="secondary" onClick={() => handleOnClick('Solicitud')}>Solicitud</Button>
          <Button type="button" color="secondary" onClick={() => handleOnClick('Materia')}>Materia</Button>
          <Button type="button" color="secondary" onClick={() => handleOnClick('PDF')}>PDF</Button>
          <Button type="button" color="secondary" onClick={() => handleOnClick('Historial')}>Historial</Button>
        </ButtonGroup>
      </Grid>
      <br />
      <Grid
        item
        xs={12}
      >
        {getState()}
      </Grid>
    </>
  );
}


// {requestsMatch ? (
//     <div className="row justify-content-md-center col 1">
//       { isEmpty(requestsMatch.requestsMatch) ? <Match requestMatch={requestsMatch} />
//         : (
//           <>
//             <p>
//               <a className="btn btn-outline-success btn-lg btn-block" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Historial</a>
//             </p>
//             <div className="row">
//               <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample1">
//                   <div className="card card-body">
//                     <ListRequest title="Historial Negativo" isSearch={0} requests={requestsMatch.requestsMatch} handleSearchRequest={null} checkAdmin={!false} pageSize={5} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//     </div>
//   ) : null}
//   {checkProfessor && request.commentsToProfessor
//     ? (
//       <div className="row justify-content-md-center col 1">
//         <p>
//           <a className="btn btn-primary btn-lg" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Comentario</a>
//         </p>
//         <div className="row">
//           <div className="col">
//             <div className="collapse multi-collapse" id="multiCollapseExample1">
//               <div className="card border-dark mb-3">
//                 <div className="card-body text-dark">
//                   <p className="card-text">{request.commentsToProfessor}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ) : null}

//   {request ? <RequestPage request={request} /> : null}
// </>
