import React from "react";
import imgPost1 from "../static/image/desktop/img1.png"
import imgPost2 from "../static/image/desktop/img2.png"
import imgPost3 from "../static/image/desktop/img3.png"
import arrowDown from "../images/arrow-down.svg"

const Main = () => {
    return (<div className="main">
        <div className="main__feedback">
            <div className="container">
                <div className="main__reviews"><h2>“I registered on the AidaForm website, having stumbled upon one
                    of
                    the form templates, which I really liked. My first form, which is still active by the way, was
                    published 20 minutes after I found the AidaForm website and created an account!”</h2>
                </div>
                <div className="main__balloon"/>
                <div className="main__name-reviewer"><h3><b>Ben Johnson,</b> web-store owner</h3></div>
                <button className="btn"/>
                <button className="btn"/>
            </div>
        </div>
        <div className="main__title"><h1>What's New?</h1></div>
        <div className="main__posts">
            <ul>
                <li><img src={imgPost1} alt="img-post"/><span><a
                    href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank">Instagram
                    FAQ —
                    All You Need To Know</a></span></li>
                <li><img src={imgPost2} alt="img-post"/><span><a
                    href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank">DMEXCO
                    2019 — Meet Combin in Cologne</a></span></li>
                <li><img src={imgPost3} alt="img-post"/><span><a
                    href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank">Limits
                    Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1</a></span></li>
            </ul>
        </div>
        <button className="main__rm-btn">Read More<img src={arrowDown} alt="arrow-down" /></button>
    </div>);
};

export default Main;
