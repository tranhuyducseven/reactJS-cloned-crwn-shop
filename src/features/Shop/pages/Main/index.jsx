import CollectionOverview from 'features/Shop/components/CollectionOverview'
import React from 'react'
import './style.scss'


function MainPage(props) {

    return (
        <div className='shop-page'>
            <CollectionOverview />
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

