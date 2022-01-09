import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { useEffect, useState } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import './style.scss'

function InputField(props) {
    const { field, form, label, placeholder, type } = props;
    // const { name, value, onChange, onBlur } = field;
    const { name} = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];    
    
    //1.
    // const handleInputChange = (e) => {
    //     form.setFieldValue(name, e.target.value);
    // }
    //2.
    // const [value, setFieldValue] = useState(field.value);
    // const handleInputChange = (e)=>{
    //     setFieldValue(e.target.value)
    // }
    //3. use default onChange of FastField


    //debug
    // useEffect(()=>{
    //     console.log(field.value);
    // },[field.value]);
    return (
        <FormGroup className="group">
            {label && <Label className="form-input-label shrink" for={name}>{label}</Label>}

            <Input
                className="form-input"
                id={name}
                {...field}
                // // onChange={handleInputChange}
                // value={field.value}
                // onChange={handleInputChange}
                type={type}
                placeholder={placeholder}

                invalid={showError} />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,

}
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',

}
export default InputField

