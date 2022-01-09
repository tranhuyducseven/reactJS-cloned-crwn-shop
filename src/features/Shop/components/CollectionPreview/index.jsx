import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../CollectionItem';
import './style.scss'

function CollectionPreview(props) {
    const { collection } = props;
    const {title, routeName, items} = collection
    return (
        <div className='collection-preview'>
            <Link target='_blank' to={`/shop/${routeName}`} className='title'>{title.toUpperCase()}</Link>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}

CollectionPreview.propTypes = {

}

export default CollectionPreview


