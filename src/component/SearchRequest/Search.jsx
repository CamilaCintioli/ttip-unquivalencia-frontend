/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';


const Search = ({ form, handleChange }) => (
  <div>
    <form>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2"><b>Carrera Origen</b></label>
        <input type="text" name="universityOrigin" value={form.universityOrigin} className="form-control" id="formGroupExampleInput" placeholder="Universidad Origen" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2"><b>Carrera Origen</b></label>
        <input type="text" name="careerOrigin" className="form-control" id="formGroupExampleInput2" placeholder="Carrera Origen" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2"><b>Plan Origen</b></label>
        <input type="text" name="yearPlanOrigin" className="form-control" id="formGroupExampleInput2" placeholder="Plan Origen" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2"><b>Materia Origen</b></label>
        <input type="text" name="subjectOrigin" className="form-control" id="formGroupExampleInput2" placeholder="Materia Origen" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2"><b>Carrera UNQ</b></label>
        <input type="text" name="careerUnq" className="form-control" id="formGroupExampleInput2" placeholder="Carrera UNQ" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2"><b>Materia Unq</b></label>
        <input type="text" name="subjectUnq" className="form-control" id="formGroupExampleInput2" placeholder="Materia Unq" onChange={handleChange} />
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0"><b>Tipo</b></legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="type" value="interna" id="gridRadios1" onChange={handleChange} />
              <label className="form-check-label" htmlFor="gridRadios1">
                        Interna
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="type" value="externa" id="gridRadios2" onChange={handleChange} />
              <label className="form-check-label" htmlFor="gridRadios2">
                        Externa
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>

);

export default Search;
