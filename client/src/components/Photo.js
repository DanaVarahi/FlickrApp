
import React, {useState} from "react";

const Photo = ({photo}) => {

    const dateTaken = photo.datetaken.split(" ")
    const [visible, setVisible] = useState(false)
 
    const toggleVisible = () => {
        setVisible(!visible)
    }

    return (
        <li onClick={toggleVisible}>
            <h1>{photo.title}</h1>
            <img src={photo.url_l} alt={photo.title}></img>
            <div id="Date">
                <h2>Date:{dateTaken[0]}</h2>
                <h2>Time:{dateTaken[1]}</h2>
            </div>
            <div className={visible ? "show": "hide"}>
                <h1>{photo.title}</h1>
                <img src={photo.url_l} alt={photo.title}></img>
                <p>{photo.description['_content'].replace( /(<([^>]+)>)/ig, '')}</p>
            </div>
        </li>
    )

}

export default Photo

