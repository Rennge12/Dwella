import React from 'react';
import axios from 'axios';
import { VscAccount, VscEdit } from "react-icons/vsc";

const icons = [
    <VscAccount />,
];

function Profile(){
    
    return(
        <>
            <div className = "main">
                <div className = "left">
                    <div className="left-top">

                    </div>
                    <div className="left-bot">

                    </div>
                </div>
                <div className = "right">
                    <div className = "top">
                    <VscEdit />
                    </div>
                    <div className = "bottom">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;