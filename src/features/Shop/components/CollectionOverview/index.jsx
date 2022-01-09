import { selectCollections } from 'features/Shop/shop.selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import CollectionPreview from '../CollectionPreview'
import './style.scss'
function CollectionOverview(props) {
    const collections = useSelector(selectCollections)
    return (
        <div className='collections-overview'>
            {collections.map((collection) => (
                <CollectionPreview key={collection.id} collection={collection} />
            ))}
        </div>
    )
}

CollectionOverview.propTypes = {

}

export default CollectionOverview

