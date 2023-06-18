import React from 'react'
import IMAGES from '../images'
import { useNavigate } from "react-router-dom";

const Img5 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <br />
            <div className="rounded float-start">
                < img src={IMAGES.imgFive} className="img-thumbnail" alt="img5" />
            </div>
            <div>
                <h1 onClick={() => navigate("1")}>Person 1</h1>
                <h1 onClick={() => navigate("2")}>Person 2</h1>
                <h1 onClick={() => navigate("3")}>Person 3</h1>
            </div>
        </div>
    )
}

export default Img5
