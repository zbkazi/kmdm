import React from 'react';
import Image from 'next/image';

const NationalSongMp3 = () => {
  return (
    <div>
      <audio controls>
        <source src="/src/assets/bd_national_anthem.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default NationalSongMp3;
