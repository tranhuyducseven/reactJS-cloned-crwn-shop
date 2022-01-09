import SHOP_DATA from 'constants/shop.data'
import CollectionPreview from 'features/Shop/components/CollectionPreview'
import React from 'react'
import './style.scss'
const collections = SHOP_DATA
function MainPage(props) {
    return (
        <div className='shop-page'>
            {collections.map(({ id, ...other }) => (
                <CollectionPreview key={id} {...other} />
            ))}
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

