import SignUpForm from 'features/SignInSignUp/components/SignUpForm'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, createUserProfileDocument } from 'firebaseConfig/firebase.utils'
import React from 'react'
import './style.scss'
const initialValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


function SignUpPage(props) {
    const handleSubmit = async (values, actions) => {
        const { email, password, displayName } = values;
        const { setSubmitting, setErrors, setStatus, resetForm } = actions;
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 

                    const user = userCredential.user;
                    // user.displayName = displayedName;
                    createUserProfileDocument(user, {displayName});
                })
            resetForm({})
            setStatus({ success: true })
        } catch (error) {
            setStatus({ success: false })
            setSubmitting(false)
            setErrors({ submit: error.message })
        }

    }
    return (
        <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign in with your email and password</span>
            <SignUpForm
                initialValues={initialValues}
                onSubmit={handleSubmit} />

        </div>
    )
}

SignUpPage.propTypes = {

}

export default SignUpPage

