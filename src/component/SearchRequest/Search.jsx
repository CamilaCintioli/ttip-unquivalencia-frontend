/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { map } from 'lodash';
import formSearch from './formSearch';

const Search = ({ form, handleChange, onClick }) => (
  <div>
    <form>
      {map(formSearch, (buildForm) => (
        <div className="form-group">
          <label><b>{buildForm.placeHolder}</b></label>
          <input
            type={buildForm.type}
            name={buildForm.name}
            value={form[buildForm.name]}
            id={buildForm.name}
            onChange={handleChange}
            className="form-control"
            placeholder={buildForm.placeHolder}
          />
        </div>
      ))}
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
    <button className="btn btn-outline-success btn-block " onClick={onClick}>Buscar</button>
  </div>

);

export default Search;
