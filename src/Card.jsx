import React from "react";
import "./card.css"

const Card=(props)=>{
    return(
        <>
            <div className="card">
                <div className="img_con">
                    <img src={props.src} />
                </div>
                <div className="Info">
                    <span className="title">{props.title}</span>
                    <h3 className="sname">{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card