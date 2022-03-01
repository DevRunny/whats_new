import React, {useState} from 'react';
import imgPost from "../../static/image/desktop/img3.png";

const Posts = (props) => {
  props.posts.sort((a, b) => {
    const dateA = new Date(a.date),
        dateB = new Date(b.date);
    return dateB - dateA;
  });

  return props.posts.map((post, index) => {
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

export default Posts;