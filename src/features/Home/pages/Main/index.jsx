import Directory from 'features/Home/components/Directory'
import React from 'react'
import './style.scss'

function MainPage(props) {
    return (
        <div className='homepage'>
            <Directory/>
            
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

