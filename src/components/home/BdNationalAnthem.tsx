import React from 'react';
import Image from 'next/image';

const by = '/src/assets/bd_national_anthem.mp3'

const BdNationalAnthem = () => {
  return (
    <div>
      <div>
        <h1 className='text-center text-xl font-bold hover:underline'>জাতীয় সঙ্গীত </h1>
        <iframe className='w-full h-10' src="https://commons.wikimedia.org/wiki/File:Amar_Sonar_Bangla_-_official_vocal_music_of_the_National_anthem_of_Bangladesh.ogg?embedplayer=yes" loading="lazy" allow="autoplay; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default BdNationalAnthem;


