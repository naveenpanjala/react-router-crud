import React from 'react'
import IMAGES from '../images'
import { useNavigate } from "react-router-dom";

const Img4 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <br />
            <div className="rounded float-start">
                <img src={IMAGES.imgFour} className="img-thumbnail" alt="img4" />
            </div>
            <div>
                <h1 onClick={() => navigate("1")}>Person 1</h1>
                <h1 onClick={() => navigate("2")}>Person 2</h1>
                <h1 onClick={() => navigate("3")}>Person 3</h1>
            </div>
        </div>
    )
}

export default Img4
