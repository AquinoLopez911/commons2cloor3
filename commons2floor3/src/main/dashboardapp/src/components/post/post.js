import React, {Component} from "react";
import axios from "axios";

import "./post.css";

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dimensions: {}
        };
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad = ({target:img}) => {
        this.setState( { dimensions :{ 
                            height:img.offsetHeight,
                            width:img.offsetWidth
                        }}
                    );
    }

    render() {
        return (            
            <div className="col-4 m-3 card bg-warning">
                <img
                src={`http://localhost:3000/api/v1/download/post/${this.props.s3Key}`}
                alt={`${this.props.s3Key} img`}
                style={{width : 100 + "%"}}
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props._post.author}</h5>
                    <p className="card-text">{this.props._post.caption}.</p>
                </div>
            </div>
        );
    }
        
}

export default Post;