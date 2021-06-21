import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        SIMCO THREAD MILLS
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#products">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#aboutus">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#contactus">
          Testimonials
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
