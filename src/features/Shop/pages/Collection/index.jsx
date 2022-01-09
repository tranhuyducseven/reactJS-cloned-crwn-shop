import CollectionItem from 'features/Shop/components/CollectionItem'
import { selectCollection } from 'features/Shop/shop.selectors';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './style.scss'
function CollectionPage(props) {
    const params = useParams();
    const { collectionId } = params;
    const collection = useSelector(selectCollection(collectionId));
    const {title, items} = collection;
    return (
        <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
    )
}

CollectionPage.propTypes = {

}

export default CollectionPage

// <h2 className='title'>{title}</h2>
// <div className='items'>
//     {items.map(item => (
//         <CollectionItem key={item.id} item={item} />
//     ))}
// </div>