import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SoundButtons = () => {
  const [sounds, setSounds] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchSounds = async () => {
      try {
        const response = await axios.get('/api/sounds');
        setSounds(response.data);
      } catch (error) {
        console.error('Error fetching sounds:', error);
      }
    };

    fetchSounds();
  }, []);

  const handlePlaySound = async (soundId) => {
    try {
      setIsPlaying(true);
      await axios.post('/api/play-sound', { soundId });
      setIsPlaying(false);
    } catch (error) {
      console.error('Error playing sound:', error);
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <h2>Sonidos en Stream</h2>
      {sounds.map((sound) => (
        <button
          key={sound.id}
          disabled={sound.isSubscriberOnly && !userData.isSubscribed}
          onClick={() => handlePlaySound(sound.id)}
        >
          {sound.name}
        </button>
      ))}
      {isPlaying && <div>Reproduciendo sonido...</div>}
    </div>
  );
};

export default SoundButtons;
