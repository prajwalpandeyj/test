import React from 'react'
import "./NavNews.css"
import DrawerNews from "./DrawerNews.js"
const NavNews = ({setCategory}) => {
    return (
        <div className="nav">
            <div className='icon'>
                <DrawerNews setCategory={setCategory}/>
            </div >
            <h1>BriefMe</h1>
        </div>
    )
}

export default NavNews
