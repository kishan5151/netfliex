import React from "react";
import "./card.css"
import FooterEle from "./footerEle/FooterEle";
import FooterEle2 from "./footerEle/FooterEle2";
import FooterEle30 from "./footerEle/FooterEle30";

const Footer=()=>{
    return(
        <>
            <div className="footer">
                <FooterEle/>
                <FooterEle2/>
                <FooterEle30/>
            </div>
        </>
    )
}
export default Footer