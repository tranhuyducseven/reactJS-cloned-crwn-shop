import NotFound from 'components/NotFound'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/Main'

function Shop(props) {
    return (
        <Routes>
            <Route path="" element={<MainPage/>} />            
            <Route element={<NotFound />} />
        </Routes>
    )
}

Shop.propTypes = {

}

export default Shop

