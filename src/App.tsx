import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { UserData } from "./tyoes/user";

function App() {
  const [profile, setProfile] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getRandomProfile = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://randomuser.me/api/");
      const data = await res.data;
      console.log(data.results[0], "res");
      const userProfile = data.results[0];
      setProfile(userProfile);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getRandomProfile(); // for fetching on first render
  }, []);
  return (
    <div className="container">
      <div className="sub-container">
        <div className="img-container">
          <img src={profile?.picture.medium} className="img" />
          <p className="title">
            {profile?.name.title} {profile?.name.first} {profile?.name.last}
          </p>
        </div>
        <div className="details-container">
          <p className="header">
            Gender:
            <span className="address">{profile?.gender}</span>
          </p>
          <div className="contact-container">
            <p className="header">
              Email:
              <span className="address">{profile?.email}</span>
            </p>
            <p className="header">
              Phone Number:
              <span className="address">{profile?.phone}</span>
            </p>
          </div>
          <p className="header">
            Address:
            <span className="address">
              {profile?.location.street.number}, {profile?.location.street.name}
            </span>
          </p>
          <div className="state-container">
            <p className="header">
              City:
              <span className="address">{profile?.location.city},</span>
            </p>
            <p className="header">
              State:
              <span className="address">{profile?.location.state},</span>
            </p>
            <p className="header">
              Country:
              <span className="address">{profile?.location.country},</span>
            </p>
            <p className="header">
              Postal Code:
              <span className="address">{profile?.location.postcode},</span>
            </p>
          </div>
        </div>
      </div>
      <button onClick={getRandomProfile}>get data</button>
    </div>
  );
}

export default App;
