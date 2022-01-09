import { addItem } from 'features/Cart/cartSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import './style.scss';

function CollectionItem(props) {
    const { item } = props;
    const { name, imageUrl, price } =  item ;
    const dispatch = useDispatch ();
    const handleAddToCart = () =>{
        const action = addItem(item)
        dispatch(action);
    }
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button className="add-to-cart-button" onClick={handleAddToCart}>ADD TO CART</Button>
        </div>
    );
}

CollectionItem.propTypes = {

}

export default CollectionItem

