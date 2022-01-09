import InputField from 'custom/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
import '../SignInForm/style.scss';

function SignUpForm(props) {
    const { initialValues, onSubmit } = props;
    const validationSchema = Yup.object().shape({
        displayName: Yup.string().required('This field is required'),
        email: Yup.string().email().required('This field is required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password"), null], "Passwords must match"),
    });
    return (

        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}

        >
            {fomikProps => {
                const { values, touched, errors } = fomikProps;
                const noErrors = !errors['displayName']&&!errors['email'] && !errors['password'] &&!errors['confirmPassword'];
                return (
                    <Form>
                        <FastField
                            name='displayName'
                            component={InputField}

                            label="Your displayed name"
                            placeholder="Enter your displayed name"
                        />
                        <FastField
                            name='email'
                            component={InputField}

                            label="Your email"
                            placeholder="Enter your email address"
                        />
                        <FastField
                            name='password'
                            component={InputField}

                            label="Password:"
                            placeholder="Enter your password"
                            type="password"
                        />
                        <FastField
                            name='confirmPassword'
                            component={InputField}

                            label="Confirm Password:"
                            placeholder="Confirm your password"
                            type="password"
                        />
                        <FormGroup>
                            <Button
                                type="submit" className="form__button"
                                disabled={!noErrors}
                            >
                                Sign Up
                            </Button>

                        </FormGroup>

                    </Form>
                )
            }}
        </Formik>

    )
}

SignUpForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func
}
SignUpForm.defaultProps = {
    initialValues: {},
    onSubmit: null
}
export default SignUpForm

