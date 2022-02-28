import React, {Component} from "react";
import imgPost from "../static/image/desktop/img3.png";
import arrowDown from "../images/arrow-down.svg";
import CarouselContainer from "./Feedback/CarouselContainer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {readMore: false};
    this.handleClick = this.handleClick.bind(this);
    this.loadPosts = {isLoaded: "disabled"};
  }

  componentDidMount() {
    this.props.getPostsThunkCreator(this.props.posts);
    this.loadPosts = "none";
  }

  handleClick = () => {
    this.setState((prevState) => ({
      readMore: !prevState.readMore,
    }));
    this.props.posts.sort((a, b) => {
      const dateA = new Date(a.date),
          dateB = new Date(b.date);
      return dateB - dateA;
    });
  };

  render() {
    const readMore = this.state.readMore;
    const posts = this.props.posts;

    function RenderPosts() {
      return posts.map((post, index) => {
        return (
            <li key={index}>
              <a href={post.url} target="_blank" rel="noreferrer">
                <img src={imgPost} alt="img-post"/>
                <span>{post.title}</span>
              </a>
            </li>
        );
      });
    }

    function MorePosts() {
      if (readMore) {
        return <RenderPosts/>;
      } else {
        return null;
      }
    }

    return (
        <div className="main">
          <div className="main__feedback">
            <div className="container">
              <CarouselContainer />
              <div className="main__balloon"/>
            </div>
          </div>
          <div className="main__title">
            <h1>What's New?</h1>
          </div>
          <div className="main__posts">
            <ul>
              {this.props.firstPosts.map((post) => {
                return (
                    <li key={post.id}>
                      <a href={post.url} target="_blank" rel="noreferrer">
                        <img src={post.src} alt="img-post"/>
                        <span>{post.title}</span>
                      </a>
                    </li>
                );
              })}
              <MorePosts/>
            </ul>
          </div>
          <button
              disabled={this.loadPosts.isLoaded}
              id="read-more"
              className="main__rm-btn"
              onClick={this.handleClick}
          >
            {readMore ? "Hide" : "Read More"}
            <img
                src={arrowDown}
                style={
                  readMore ? {transform: "rotate(180deg)"} : {transform: "none"}
                }
                alt="arrow-down"
            />
          </button>
        </div>
    );
  }
}

export default Main;
