import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <Link to="/" >Home</Link>
                    <Link to="gallery">Saved photos</Link>
                    <Link to="favourite" >Favourite Photos</Link>
                </div>
            </nav>
        </div>
    )
}

export default index
