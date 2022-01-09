import React from 'react'
import PropTypes from 'prop-types'
import { FastField, Form, Formik } from 'formik'
import InputField from 'custom/InputField';
import * as Yup from 'yup';
import { Button, FormGroup } from 'reactstrap';
import './style.scss'
import { signInWithGoogleAuth } from 'firebaseConfig/firebase.utils';



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
                const { values, touched, errors } = fomikProps;
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

