import React, {useState, useRef} from 'react';
import ReactCardFlip from 'react-card-flip';


const TeamMembercard = ({teamMember}) => {

    //checks weather on of the cards is toggled
    const [isFlipped, setIsFlipped] = useState(false);

    const [Member , setMember] = useState({teamMember});



    // this will take the boxshadow and the bottom border off the card
    // and display the coresponding info 
    const handleClick = () => {
        setIsFlipped(!isFlipped);
        
    }


    return (
        <ReactCardFlip  isFlipped={isFlipped} flipDirection="vertical">

            <div key={teamMember.member_id} className="front-profile col-lg-4 col-md-6 col-sm-6 col-8">
                <h1>{teamMember.name}</h1>
                <img className={teamMember.class} src={teamMember.img} alt={teamMember.name}/>
                <button className="link-text btn" onClick={handleClick} >
                <h3>Meet {teamMember.fName}</h3>
                </button>
            </div>
    
            <div className="p-3 back-profile m-5 ">
                {/* where member info will be rendered*/}
                <div class="">
                    <h2>{teamMember.name}</h2>
                    <p>{teamMember.intro}</p>
                </div>
                <div>
                    <img className="back-img" src={teamMember.backImg} alt="about-pic" />
                    <h2>{teamMember.name} testimony</h2>
                    <p>{teamMember.description}</p>
                    <button className="link-text btn btn-primary" onClick={handleClick}>flip card</button>
                </div>
            </div>
        </ReactCardFlip>
    );
}

export default TeamMembercard;