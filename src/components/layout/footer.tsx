import React from 'react';
// import Logo from '../logo';

const navItems = [
  'Home',
  'Get Involved',
  'Donate',
  'Impact Areas',
  'Success Stories',
  'New',
  'Contact Us',
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap pb-12 mt-36 w-full max-md:mt-10 max-sm:mt-8 max-md:max-w-full">
      <nav className="md:flex  relative justify-between items-center p-8 bg-gray-50 border border-gray-100 md:rounded-full rounded-2xl w-full max-lg:flex-col max-lg:gap-6 max-lg:p-6 max-md:p-5 max-sm:p-4">
        {/* <Logo /> */}
        <div className="flex gap-2.5 items-center max-lg:self-center max-sm:gap-2">
          {[
            'https://cdn.builder.io/api/v1/image/assets/TEMP/b119a8d5dcf3bc40c072670bc59964e6e826290da399ef8439db8b3ca20bcc79?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
            'https://cdn.builder.io/api/v1/image/assets/TEMP/d013efd3f1a575271e3c6668d7b263fd454ff613e3da9a21b435f69acb1796cd?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
            'https://cdn.builder.io/api/v1/image/assets/TEMP/090ec4345aff6f2f946365fdcc4a5a415b4405e82219dbb81a2b2b1a68af56fd?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          ].map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 w-14 h-14 bg-lime-300 rounded-full max-lg:w-12 max-lg:h-12 max-sm:w-10 max-sm:h-10"
            >
              <img
                loading="lazy"
                src={src}
                className="object-contain w-6 max-lg:w-5 max-sm:w-4"
                alt={`Social media icon ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="md:flex grid grid-cols-2 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-0 flex-wrap gap-6 text-lg font-medium text-neutral-800 max-lg:flex-col max-lg:gap-4 max-lg:static max-lg:translate-x-0 max-lg:translate-y-0 max-md:text-base max-sm:text-sm">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-lime-500 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
      <p className="mt-8 text-lg text-center text-stone-500 max-md:text-base max-sm:text-sm max-sm:mt-6">
        © 2023 ForHelp. All rights reserved. <span>@Prasanta ~</span>
      </p>
    </footer>
  );
};

export default Footer;
