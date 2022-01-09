import NotFound from 'components/NotFound'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CollectionPage from './pages/Collection'
import MainPage from './pages/Main'

function Shop(props) {
    return (
        <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path=":collectionId" element={<CollectionPage />}/>
            <Route element={<NotFound />} />
        </Routes>
    )
}



export default Shop

