import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <header>
      {userData ? (
        <div>
          <img src={userData.avatar} alt={userData.name} />
          <span>{userData.name}</span>
          {!userData.isSubscribed && (
            <a href="https://www.facebook.com/alesongg" target="_blank" rel="noopener noreferrer">
              Suscribirse
            </a>
          )}
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </header>
  );
};

export default Header;
