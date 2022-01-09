import NotFound from 'components/NotFound'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/Main'

function Home(props) {
    return (
        <Routes>
            <Route path="" element={<MainPage/>} />            
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

Home.propTypes = {

}

export default Home

