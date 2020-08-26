import React, {Component} from 'react';
import raTeam from './raTeam.json';

import './../../css/RA-1.css'


export default class TeamList extends Component {

    constructor(props) {
        super();
        this.state = {
            teamName : "",
            teamMembers :[]
        }
    }


    componentDidMount() {
        if(this.props.teamName === "RA") {
            let res = raTeam;
            this.setState({teamName : res.teamName});
            this.setState({teamMembers : res.members});
        }


    }

    

    render() {

        return(
            <div>
                <h1 id="text-danger">{this.state.teamName}</h1>

                <div className="container-fluid row">
                    {
                        this.state.teamMembers.map(member => 
                            <div key={member.member_id} className="profile col-lg-4 col-md-6 col-sm-6 col-8">
                                <h1>{member.name}</h1>
                                <img className={member.class} src={member.img} alt={member.name}/>
                                <a className="link-text"  onClick={this.something}>
                                <h3 >Meet {member.fName}</h3>
                                </a>
                            </div>
                        )
                    }
		        </div> 
            </div>
        ); 
    }
}