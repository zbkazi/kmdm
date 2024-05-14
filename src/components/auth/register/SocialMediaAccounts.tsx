import React from 'react';
import Image from 'next/image';
import facebook from '@/assets/SVG/facebook-svgrepo-com.svg';
import google from '@/assets/SVG/google-color-svgrepo-com.svg';
import Link from 'next/link';

// Mapping of social media platforms to their respective SVG icons
const SocialMediaAccountsSvg = {
  facebook: facebook,
  google: google,
};

const SocialMediaAccounts = () => {
  return (
    <div>
      <div className="flex mt-8 flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-12">
          
          {/* Google Icon */}
          <div className="flex items-center justify-center">
           <Link href="/google/login">
           <Image src={SocialMediaAccountsSvg.google} alt="Google" width={32} height={32} />
           </Link>
          </div>
          {/* Facebook Icon */}
          <div className="flex items-center justify-center">
            <Link href="/facebook/login">
            <Image src={SocialMediaAccountsSvg.facebook} alt="Facebook" width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAccounts;
