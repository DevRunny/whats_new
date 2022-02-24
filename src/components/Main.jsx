import React, {useState, useEffect} from "react";
import imgPost1 from "../static/image/desktop/img1.png"
import imgPost2 from "../static/image/desktop/img2.png"
import imgPost3 from "../static/image/desktop/img3.png"
import arrowDown from "../images/arrow-down.svg"
import {getPostsThunkCreator} from "../redux/posts/postsReducer";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {readMore: false}
    }

    componentDidMount() {
        this.props.getPostsThunkCreator(this.props.posts)
    }

    readMore = false

    handleClick = () => {
        this.setState({readMore: true})
    }



    render() {
        const readMore = this.state.readMore
        const posts = this.props.posts

        function RenderPosts() {
            return posts.map((post) => {
                    return (
                        <li key={post.date}>
                            <a href={post.url} target="_blank"><img src={imgPost3} alt="img-post"/><span>
                                {post.title}
                                </span></a>
                        </li>
                    );
                })
        }

        function MorePosts() {
            if (readMore) {
                return <RenderPosts />
            } else {
                return null
            }
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
                    {this.props.firstPosts.map((post) => {
                        return (
                            <li key={post.id}>
                                <a href={post.url} target="_blank"><img src={post.src} alt="img-post"/><span>
                                {post.title}
                                </span></a>
                            </li>
                        );
                    })}
                    <MorePosts readMore={false}/>
                </ul>
            </div>
            <button id="read-more" className="main__rm-btn" onClick={(e) => {
                this.handleClick()
                e.target.style.display = "none"
            }}>Read More<img src={arrowDown}
                                                                          alt="arrow-down"/>
            </button>
        </div>);
    };
}

export default Main;
