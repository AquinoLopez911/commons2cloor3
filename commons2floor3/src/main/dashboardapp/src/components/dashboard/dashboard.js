import React, {Component} from 'react';
import axios from "axios";

import PostForm from './../postForm/postForm';
import Post from './../post/post';



class Dashboard extends Component {

    constructor(props) {
        super();
        this.state = {
            posts : []
        }
      }
    
      componentDidMount() {
        axios.get("http://localhost:3000/api/v2/all/posts")
          .then(res => {
    
            let postsData = res.data;
            console.log(postsData);
            this.setState({posts: postsData});
            } 
          )
          .catch(err => console.log(err));
      }
    
      // callback function
      handelPosts = (newPosts) => {
        this.setState({posts : newPosts});
      }

    render() {
        return(
            <div>
                <PostForm handelPosts={this.handelPosts}/>
                <div>
                {
                    this.state.posts.map( post =>
                    <div key={post.postId} className="row justify-content-center">
                        <Post s3Key={post.s3ObjectKey} _post={post} />
                        </div>
                    )
                }
                </div>
            </div>
        );
    }
}


export default Dashboard;