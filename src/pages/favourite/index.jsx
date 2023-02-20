import React, { useEffect, useState } from 'react'

const Index = () => {

    const [imgList, setImgList] = useState([])
    useEffect(() => {
        setImgList(JSON.parse(localStorage.getItem('fav')));
    }, []);

    return (
        <div>
            <div className="row">
                <div id="image-collection">
                    {imgList && imgList.map((item, index) => <img src={item.path} key={index} id={index} alt="img" />)}
                </div>
            </div>
        </div>
    )
}

export default Index
