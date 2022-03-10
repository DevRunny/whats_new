import React, { Component } from "react";
import arrowDown from "../images/arrow-down.svg";
import CarouselContainer from "./Feedback/CarouselContainer";
import PostsContainer from "./Posts/PostsContainer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { readMore: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getPostsThunkCreator(this.props.firstPosts);
  }

  handleClick = () => {
    this.setState((prevState) => (
      {
        readMore: !prevState.readMore,
      }
    ));
  };

  render() {
    const readMore = this.state.readMore;
    const postsReady = this.props.posts;

    return (
      <div className="main">
        <div className="main__feedback">
          <div className="container">
            <CarouselContainer />
            <div className="main__balloon" />
          </div>
        </div>
        <div className="main__title">
          <h1>What's New?</h1>
        </div>
        <div className="main__posts">
          <ul>
            { this.props.firstPosts.map((post) => {
              return (
                <li key={ post.id }>
                  <a href={ post.url } target="_blank" rel="noreferrer">
                    <img src={ post.src } alt="img-post" />
                    <span>{ post.title }</span>
                  </a>
                </li>
              );
            }) }
            { readMore ? <PostsContainer /> : null }
          </ul>
        </div>
        <button
          disabled={ !postsReady }
          id="read-more"
          className="main__rm-btn"
          onClick={ this.handleClick }
        >
          { readMore ? "Hide" : "Read More" }
          <img
            src={ arrowDown }
            style={
              readMore ? { transform: "rotate(180deg)" } : { transform: "none" }
            }
            alt="arrow-down"
          />
        </button>
      </div>
    );
  }
}

export default Main;
