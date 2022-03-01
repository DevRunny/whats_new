import React, {Component} from 'react';
import Posts from "./Posts";

class PostsComponent extends Component {

  componentDidMount() {
    this.props.getPostsThunkCreator();
  }

  render() {
    return (
        <Posts
        posts={this.props.posts}
        />
    );
  }
}

export default PostsComponent;