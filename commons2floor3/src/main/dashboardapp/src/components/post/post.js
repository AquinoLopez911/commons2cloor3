import React, {Component} from "react";
import axios from "axios";


class Post extends Component {

    constructor(props) {
        super();
        this.state = {
            
        }
    }


    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <img
                    src={`http://localhost:3000/api/v1/download/post/${this.props.s3Key}`}
                    // i included the profileImgLink in the new path because that will make the rerender happen when comaring the doms
                    alt={`${this.props.s3Key} img`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.s3Key}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        );
    }
        
}

export default Post;