import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from '../Nav';
import "./ProfileScreen.css";
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans <span>(Current Plan: Premium)</span> </h3>
                        <p>Renewal Date: 12/3/22</p>
                        <div className="profileScreen__plansInfo">
                            <div className="profileScreen__planInfo">
                                <div className="profileScreen__plan">
                                    <h5>Basic</h5> 
                                    <h6>480p</h6>
                                </div>
                            
                                <button>Subscribe</button>
                            </div>
                            <div className="profileScreen__planInfo">
                                <div className="profileScreen__plan">
                                    <h5>Standard</h5> 
                                    <h6>1080p</h6>
                                </div>
                            
                                <button>Subscribe</button>
                            </div>
                            <div className="profileScreen__planInfoCurrent">
                                <div className="profileScreen__plan">
                                    <h5>Premium</h5> 
                                    <h6>4K HDR</h6>
                                </div>
                            
                                <button>Current Package</button>
                            </div>
                            
                        </div>

                        <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileScreen;
