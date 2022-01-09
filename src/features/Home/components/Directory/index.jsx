import { selectDirectoryList } from 'features/Home/directory.selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item';
import './style.scss';


function Directory(props) {
    const list = useSelector(selectDirectoryList);
    return (
        <div className="directory-menu">
            {list.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
}

Directory.propTypes = {

}

export default Directory

