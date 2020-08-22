import React, {Component} from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/nav/nav";
import PostForm from "./components/postForm/postForm";
import Post from "./components/post/post";
import axios from "axios";



 

class App extends Component {


  constructor(props) {
    super();
    this.state = {
        posts : []
    }
  }


  componentDidMount() {
    axios.get("http://localhost:3000/api/v1/all/posts")
      .then(res => {
          this.setState({posts: res.data})
          console.log(res.data)
        } 
      )
      .catch(err => console.log(err));

  }

  handelPosts = (newPosts) => {
    this.setState({posts : newPosts});
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <PostForm handelPosts={this.handelPosts}/>
        {
          this.state.posts.map( post =>
              <div key={post.postId} className="bg-warning">
                <Post s3Key={post.s3ObjectKey} />
              </div>
            )
        }
      </div>
    );
    }
}

export default App;
