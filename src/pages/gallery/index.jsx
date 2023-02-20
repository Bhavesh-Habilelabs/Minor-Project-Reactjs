import React, { useEffect, useState } from 'react';
import './index.css';

const Gallery = () => {
    const [imgList, setImgList] = useState([])
    useEffect(() => {
        setImgList(JSON.parse(localStorage.getItem('images')));
    }, []);

    const markFav = (event) => {
        const favImg = localStorage.getItem('fav')
        const parsedImgArr = JSON.parse(favImg) ? JSON.parse(favImg) : []
        console.log("PARSED IMAGE--", parsedImgArr)
        if (Array.isArray(parsedImgArr)) {
          const fileName = `img-${event.target.id}`;
          console.log("Inside if");
          parsedImgArr.push({ name: fileName, path: event.target.src })
          localStorage.setItem('fav', JSON.stringify(parsedImgArr))
        }
    }
    return (
        <div>
            <div className="row">
                <div id="image-collection">
                    {imgList && imgList.map((item, index) => <img src={item} key={index} id={index} alt="img" onClick={markFav}/>)}
                </div>
            </div>
        </div>
    )
}

export default Gallery
