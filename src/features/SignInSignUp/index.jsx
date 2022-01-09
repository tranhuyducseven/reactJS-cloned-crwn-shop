import NotFound from 'components/NotFound'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'

function SignInSignUp(props) {
    return (
        <Routes>            
            <Route path='sign-up' element={<SignUpPage />} />
            <Route path='' element={<SignInPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

SignInSignUp.propTypes = {

}

export default SignInSignUp

