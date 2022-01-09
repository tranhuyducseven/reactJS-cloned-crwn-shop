import NotFound from 'components/NotFound'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages'

function Checkout(props) {
    return (
        <Routes>            
        <Route path='' element={<MainPage />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    )
}

Checkout.propTypes = {

}

export default Checkout

