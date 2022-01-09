import SignInForm from 'features/SignInSignUp/components/SignInForm'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebaseConfig/firebase.utils'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const initialValues = {
    email: '',
    password: ''
}

const handleSubmit = (values, actions) => {
    const { email, password } = values;
    const { setSubmitting, setErrors, setStatus, resetForm } = actions;
    try {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('Successfully sign in', user);
                // ...
            })
        resetForm({})
        setStatus({ success: true })
    } catch (error) {
        setStatus({ success: false })
        setSubmitting(false)
        setErrors({ submit: error.message })
    }
}
function SignInPage(props) {
    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <SignInForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
            <p><Link to='/sign-in/sign-up'>Don't have an account?</Link></p>
        </div>
    )
}

SignInPage.propTypes = {

}

export default SignInPage

