import React from 'react';
import {Link} from "react-router-dom";

import './../../css/meet-the-team.css';


export default function Teams() {
    return(
        <div>
            <div className="text-center m-5">
                <h2 className="text-dark font-weight-bold">Meet The Teams</h2>
            </div>
            <div className="container-fluid row justify-content-center mt-5">
                    <div className="col-6">
                        <h2>Resident Assistants</h2>
                        <Link to="teams/RA" >
                            <img src="images/RA.png" alt="RA-pic" className='mb-5'/>
                        </Link>
                        <h3>Resident Assistants are the administrative leaders on the hall, and watch out they also lay down the law</h3>
                    </div>
                    <div className="col-6">
                        <h2>Resident Shepherds</h2>
                        <Link to="/RS">
                            <img src="images/RS.png" alt="rs-pic" className='mb-5'  />
                        </Link>
                        <h3>Resident Shepherds are the spiritual leaders on the hall, they are here to guide and lead us as a hall closer to Christ</h3>
                    </div>
                    <div className="col-6">
                        <h2>Community Group leaders</h2>
                        <Link to="/CGL">
                            <img src="images/CGL.png" alt="cgl-pic" className='mb-5' />
                        </Link>
                        <h3>CGL's are led by our amazing RS's and they will lead, encourage and walk along side you in your walk with Jesus Christ</h3>
                    </div>
            </div>
        </div>
    ); 
}