import React from "react";
import imgPost from "../static/image/desktop/img3.png"
import arrowDown from "../images/arrow-down.svg"


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {readMore: false}
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getPostsThunkCreator(this.props.posts)
    }

    handleClick = () => {
        this.setState(prevState => ({
            readMore: !prevState.readMore
        }));
    }

    render() {
        const readMore = this.state.readMore
        const posts = this.props.posts

        function RenderPosts() {
            return posts.map((post) => {
                return (
                    <li key={post.date}>
                        <a href={post.url} target="_blank"><img src={imgPost} alt="img-post"/><span>
                                {post.title}
                                </span></a>
                    </li>
                );
            })
        }

        function MorePosts() {
            if (readMore) {
                return <RenderPosts/>
            } else {
                return null
            }
        }


        return (<div className="main">
            <div className="main__feedback">
                <div className="container">
                    <ul>
                    <li><div className="main__reviews"><h2>“I registered on the AidaForm website, having stumbled upon one
                        of
                        the form templates, which I really liked. My first form, which is still active by the way, was
                        published 20 minutes after I found the AidaForm website and created an account!”</h2>
                    </div>

                        <div className="main__name-reviewer"><h3><b>Ben Johnson,</b> web-store owner</h3></div></li>
                    </ul>
                    <div className="main__balloon"/>
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
                    <MorePosts/>
                </ul>
            </div>
            <button id="read-more" className="main__rm-btn" onClick={
                this.handleClick}>{this.state.readMore ? 'Hide' : 'Read More'}
                <img src={arrowDown}
                     style={this.state.readMore ? {transform: "rotate(180deg)"} : {transform: "none"}}
                     alt="arrow-down"/>
            </button>
        </div>);
    };
}

export default Main;
