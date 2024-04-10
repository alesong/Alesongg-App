const fs = require('fs');
const path = require('path');

const getSounds = (req, res) => {
  const soundsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/sounds.json'), 'utf8'));
  res.json(soundsData);
};

const playSound = (req, res) => {
  const { soundId } = req.body;
  // Lógica para reproducir el sonido y notificar a los clientes
  res.json({ message: 'Sonido reproducido' });
};

module.exports = {
  getSounds,
  playSound
};
