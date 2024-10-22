import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VscAccount } from "react-icons/vsc";

const Home = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/profiles');
        setProfile(response.data);
      } catch (error){
        console.error('Error cheese:', error);
      }
    };
    fetchProfile();
  },[]);
  return (
    <>
      <div className="hero">
        <h1>Esiet sveicināti Dwella!</h1>
        <p>Dwella uzskata, ka, meklējot ērtu naktsmītni, nevajadzētu maksāt dārgi. Neatkarīgi no tā,
          vai plānojat īsu izbraukumu, pārceļaties vai vienkārši īslaicīgi vēlaties pārcelties,
          mēs atvieglosim Jums iespēju atrast Jūsu vajadzībām atbilstošas, lētas un kvalitatīvas mītnes..</p>
        <a href="/ViewListings" className="cta-button">Sāc meklēt!</a>
      </div>
      <div className="profileSection">
        <div>profili</div>
        <div>
          {profile.map((profiles) => (
            <div> //main card
              <div>
                
              </div>
            </div>
          ))};
        </div>
      </div>
    </>
  );
};

export default Home;
