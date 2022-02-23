import React, {useState, useEffect} from "react";
import imgPost1 from "../static/image/desktop/img1.png"
import imgPost2 from "../static/image/desktop/img2.png"
import imgPost3 from "../static/image/desktop/img3.png"
import arrowDown from "../images/arrow-down.svg"
import {getPostsThunkCreator} from "../redux/posts/postsReducer"

import {useDispatch} from "react-redux";


const Main = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsThunkCreator())
    }, [dispatch])

    let readMore = false;

    const handleClick = (e) => {
        readMore = e.target.id === "read-more";

    }

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
                <button className="btn-slide"/>
                <button disabled="disabled" className="btn-slide"/>
            </div>
        </div>
        <div className="main__title"><h1>What's New?</h1></div>
        <div className="main__posts">
            <ul>
                {/*<li><a*/}
                {/*    href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank"><img*/}
                {/*    src={imgPost1} alt="img-post"/><span>Instagram*/}
                {/*    FAQ —*/}
                {/*    All You Need To Know</span></a></li>*/}
                {/*<li><a*/}
                {/*    href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank"><img*/}
                {/*    src={imgPost2} alt="img-post"/><span>DMEXCO*/}
                {/*    2019 — Meet Combin in Cologne</span></a></li>*/}
                {/*<li><a*/}
                {/*    href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank"><img*/}
                {/*    src={imgPost3} alt="img-post"/><span>Limits*/}
                {/*    Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1</span></a>*/}
                {/*</li>*/}

                {/*    <li><a*/}
                {/*        href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank"><img*/}
                {/*        src={imgPost1} alt="img-post"/><span>*/}
                {/*        Instagram*/}
                {/*        FAQ —*/}
                {/*        All You Need To Know</span></a>*/}
                {/*</li>*/}

                {/*{POSTS.map((post) => {*/}
                {/*    return (*/}
                {/*        <li key={post.date}>*/}
                {/*            <a href={post.url} target="_blank"><img src={imgPost3} alt="img-post"/><span>*/}
                {/*            {post.title}*/}
                {/*            </span></a>*/}
                {/*        </li>*/}
                {/*    );*/}
                {/*})}*/}

            </ul>
        </div>
        <button id="read-more" className="main__rm-btn" onClick={handleClick}>Read More<img src={arrowDown}
                                                                                            alt="arrow-down"/>
        </button>
    </div>)
        ;
};

export default Main;
