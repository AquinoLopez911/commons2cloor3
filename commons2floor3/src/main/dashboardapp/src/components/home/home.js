import React from 'react';
import "./../../css/style.css";


function Home() {

    return (
        <div className="container-fluid p-0">
            <div className="container-fluid intro row mb-5 ml-0 p-0">
                <div className="col-lg-7 col-md-5 col-sm-12 p-5">
                <h3 className="mt-5">Hi, welcome to the Commons 2 Floor 3 website, Im super glad you are here, there's probably a ton of questions you have about this site, play the video and i'll explain all of this the best I can</h3>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-12 align-content-center">
                <iframe src="https://www.youtube.com/embed/hM4RS3RMTmE" className="index-iframe" title="explain"></iframe>
                </div>
            </div>
        	<div className="row container-fluid mt-5 ml-0 p-0">
                    {/* one row */}
                    <div className="col d-flex sm-d-flex justify-content-around mb-5 mt-5 p-0">
                        <div className=" about-us box ">
                            <h2>Prayer</h2>
                            <img src="images/prayer.jpg" alt="prayer-pic" />
                            <p className="p-1">Prayer is at the heart of everything we do Nothing of eternal significance happens apart from prayer" - Jerry Falwell</p>
                        </div>
                        <div className=" about-us box">
                            <h2>Adventure</h2>
                            <img src="images/adventure.jpg" alt="adventure-pic" />
                            <p className="p-1">Make memories with your brothers and sisters that will last a lifetime</p>
                        </div>
                        <div className=" about-us box">
                            <h2>Community</h2>
                            <img src="images/community.jpg" alt="community-pic" />
                            <p className="p-1"> Live in a Christ Centered Community, where we will all help each other grow</p>
                        </div>
                    </div>
                    {/* second row */}
                    <div id="bottom-row" className="col d-flex sm-d-flex justify-content-around p-0">
                        <div className=" about-us box">
                            <h2>Fellowship</h2>
                            <img src="images/Teamwork.jpg" alt="Teamwork" />
                            <p className="p-1">We are more than just a group of friends, we help each other, no matter what</p>
                        </div>
                        <div className=" about-us box">
                            <h2>Serve</h2>
                            <img src="images/service.jpg" alt="serve" />
                            <p className="p-1">We are here to serve each other, the community, the church and the world</p>
                        </div>
                        <div className=" about-us box">
                            <h2>Worship</h2>
                            <img src="images/disciple.jpg" alt="disciple" />
                            <p className="p-1">Our ultimate goal is to lift high the name of Jesus and love him with all our heart, soul, mind and strength</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}


export default Home;


