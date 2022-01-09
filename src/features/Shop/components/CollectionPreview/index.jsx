import React from 'react';
import CollectionItem from '../CollectionItem';
import './style.scss'

function CollectionPreview(props) {
    const {title, items} = props;
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
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


