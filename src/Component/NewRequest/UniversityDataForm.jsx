import React, { Fragment, Component } from 'react'
import { withFormik } from 'formik'
import CreatableSelect from 'react-select/creatable'

const createOption = (label) => ({
    label,
    value: label,
});

class DataSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            value: props.options
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleChange = (value) => {
        if (value != null) {
            this.setState({ value })
            this.props.setFieldValue(this.props.field, value.value)
        } else {
            this.setState({ value: [] })
        }
    }

    handleInputChange = (inputValue) => {
        this.setState({ inputValue })
    }

    handleKeyDown = (event) => {
        const { inputValue, value } = this.state;
        if (!inputValue) return;
        // eslint-disable-next-line default-case
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                this.setState({
                    inputValue: '',
                    value: [...value, createOption(inputValue)],
                });
                this.props.setFieldValue(this.props.field, inputValue)

                event.preventDefault();
        }
    }

    render() {
        return (
            <Fragment>
                <CreatableSelect
                    isClearable
                    onChange={this.handleChange}
                    onInputChange={this.handleInputChange}
                    options={this.props.options}
                    placeholder={this.props.placeholder}
                />
            </Fragment>)
    }
}




function UniversityDataForm(props) {
    const { values, handleChange, onChange, setFieldValue } = props;

    React.useEffect(() => {
        if (onChange) {
            onChange(values);
        }
    }, [onChange,values]);

    const isExternal = props.university === "external"
    return (
        <Fragment>
            {
                isExternal ?

                    <Fragment>
                        < h3 > Datos universidad</h3 >
                        <DataSelector field="univesityOrigin" setFieldValue={setFieldValue} options={props.universityOptions} placeholder="Selecciona una universidad" />
                        <DataSelector field="subjectOrigin" setFieldValue={setFieldValue} options={props.subjectOptions} placeholder="Selecciona una materia" />
                        <label>Año:  </label>
                        <input name="year" value={values.year} onChange={handleChange} /> <br />
                    </Fragment >

                    :

                    <Fragment>
                        <h3>Universidad Nacional de Quilmes</h3>
                        <DataSelector field="subjectUnq" setFieldValue={setFieldValue} options={props.subjectOptions} placeholder="Selecciona una materia" />
                    </Fragment>

            }

        </Fragment>


    );
}

export default withFormik({
    mapPropsToValues: () => {
        return {
            year: "",
            univesityOrigin: "",
            subjectOrigin: "",
            subjectUnq:""
        };
    }
})(UniversityDataForm);
