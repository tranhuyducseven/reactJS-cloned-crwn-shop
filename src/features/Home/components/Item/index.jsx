import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Item(props) {
    const { item } = props;
    const { title, imageUrl, size, routeName } = item;
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <Link to={`/shop/${routeName}`} className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </Link>
        </div>
    );
}

Item.propTypes = {

}

export default Item

// 