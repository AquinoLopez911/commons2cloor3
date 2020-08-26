import React,{ Component } from "react";
import axios from "axios";



function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c === 'x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


class PostForm extends Component {

    

    constructor(props) {
        super();
        this.state = {
            author : "",
            caption : "",
            file : null,
            fileName : "choose file",
            posts : []
        };
    }

    initialState = this.state;

    
    authorInput = e => {
        console.log("user input: " + e.target.value);
        this.setState({author: e.target.value});
    }

    captionInput = e => {
        console.log("user input: " + e.target.value);
        this.setState({caption: e.target.value});
    }

    getFile = e => { 
        e.preventDefault();
        // dave the file to a variable 
        let imgFile = e.target.files[0];
        console.log(imgFile);
        //set state file to file
        this.setState({file: imgFile});

        //set file Name to the imported file name 
        this.setState({fileName: imgFile.name});
    }



    submitPost = e => {
        e.preventDefault();

        console.log("posting ...");

        // first send author, caption, and s3ObjectKey

        //create key for s3 object
        const objectKey = create_UUID();

        const postObjectInfo = {
            author: this.state.author,
            caption : this.state.caption,
            s3ObjectKey : objectKey
    }


        console.log("before axios post");
        //submit to save the new post to data base
        axios.post("http://localhost:3000/api/v1/post/upload", postObjectInfo)
            .then(res => {
                console.log("post uploaded succesfully");
                console.log(res);

            })
        console.log("after axios post");

        // then send the file to s3
        // return a list of posts to display 

        const s3PutInfo = new FormData();
        
        s3PutInfo.append("s3Objectkey", objectKey);
        s3PutInfo.append("file", this.state.file);
        
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post(`http://localhost:3000/api/v1/s3/upload/${objectKey}`, s3PutInfo, config)
        .then(res => {
            console.log("file uploaded succesfully");
            console.log(res);
            this.setState({posts : res.data})
            this.props.handelPosts(res.data);

        })


    }

  
    render() {
        return (
                <div className="row justify-content-center">
                    <div className="col-3 ">
                        <form onSubmit={this.submitPost} type="post">
                            {/* author */}
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" className="form-control" placeholder="Enter your name" onChange={this.authorInput} />
                            </div>
                            {/* caption */}
                            <div className="form-group">
                                <label htmlFor="caption">Caption</label>
                                <input type="text" className="form-control" placeholder="Caption" onChange={this.captionInput} />
                            </div>
                
                            {/* img to post */}
                            <div className="custom-file mt-5">
                                <input type="file" className="custom-file-input" onChange={this.getFile} />
                                <label  className="custom-file-label file-text" htmlFor="customFile">{this.state.fileName}</label>
                            </div>
                            <button type="submit" className="btn btn-primary m-3">Submit</button>
                        </form>
                    </div>
                </div>
        );
    }


}

      


  
  export default PostForm;