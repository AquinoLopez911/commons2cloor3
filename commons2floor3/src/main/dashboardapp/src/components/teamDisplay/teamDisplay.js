import React, {Component} from 'react';
import raTeam from './raTeam.json';
import rsTeam from './rsTeam.json';
import cglTeam from './cglTeam.json';

import TeamMembercard from "./../teamMemberCard/teamMemberCard";

import './../../css/RA-1.css'


export default class TeamList extends Component {

    constructor(props) {
        super();
        this.state = {
            teamName : "",
            teamMembers :[],
        }
    }


    componentDidMount() {
        let team = this.props.teamName;
        let res;
        switch(team) {
            case "RA":
                res = raTeam;
                this.setState({teamName : res.teamName});
                this.setState({teamMembers : res.members});
                break;
            case "RS":
                res = rsTeam;
                this.setState({teamName : res.teamName});
                this.setState({teamMembers : res.members});
                break;
            case "CGL":
                res = cglTeam;
                this.setState({teamName : res.teamName});
                this.setState({teamMembers : res.members});
                break;
            default:
                this.setState({teamName : "no team selected"});
                this.setState({teamMembers : {}});
                break

        }
        
    }


    render() {

        return(
            <div className="container-fluid">
                <div className="d-flex">
                    <a className="btn btn-primary" href="/teams">back</a>
                </div>
                <h1 id="text-danger">{this.state.teamName}</h1>
                    <div className="container">
                        <div className="justify-content-center">
                            {
                                this.state.teamMembers.map(member => 
                                    <TeamMembercard key={member.member_id} teamMember={member} className="profile " />
                                )
                            }
                        </div> 
                    </div>
            </div>
        ); 
    }
}