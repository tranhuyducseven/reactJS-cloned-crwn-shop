import InputField from 'custom/InputField';
import { signInWithGoogleAuth } from 'firebaseConfig/firebase.utils';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
import './style.scss';



function SignInForm(props) {
    const { initialValues, onSubmit } = props;
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('This field is required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}

        >
            {fomikProps => {
                const { errors } = fomikProps;
                //values, touched,
                const noErrors = !errors['email'] && !errors['password'];
                return (
                    <Form>
                        <FastField
                            name='email'
                            component={InputField}

                            label="Email:"
                            placeholder="Enter your email address"
                            type="email"
                        />
                        <FastField
                            name='password'
                            component={InputField}

                            label="Password:"
                            placeholder="Enter your password"
                            type="password"
                        />
                        <FormGroup>
                            <Button 
                                type="submit" className="sign-in-form__button" 
                                disabled={!noErrors}
                            >
                                Sign In
                            </Button>
                            <Button 
                                className="form__button google"
                                onClick={signInWithGoogleAuth}
                            >
                                Sign In With Google</Button>
                        </FormGroup>
                        
                    </Form>
                )
            }}
        </Formik>

    )
}

SignInForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func
}
SignInForm.defaultProps = {
    initialValues: {},
    onSubmit: null
}
export default SignInForm

