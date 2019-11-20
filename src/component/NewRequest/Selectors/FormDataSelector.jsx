import React, {Component,Fragment} from 'react';
import CreatableSelect from 'react-select/creatable';

const createOption = (label) => ({
    label,
    value: label,
});

class FormDataSelector extends Component {
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

export default FormDataSelector;