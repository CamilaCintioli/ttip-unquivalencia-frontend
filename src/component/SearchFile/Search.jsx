/* eslint-disable react/prop-types */
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
      <fieldset className="col-1">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0"><b>Estado</b></legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" value={0} id="gridRadios1" onChange={handleChange} />
              <label className="form-check-label" htmlFor="gridRadios1">
                        Resuelta
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" value={1} id="gridRadios2" onChange={handleChange} />
              <label className="form-check-label" htmlFor="gridRadios2">
                        Resolviendo
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
    <hr />
    <button className="btn btn-outline-success btn-block " onClick={onClick}>Buscar</button>
  </div>


);
export default Search;
