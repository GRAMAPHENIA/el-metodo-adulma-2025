import React from 'react';
import Link from 'next/link';


interface FooterSectionProps {
  title: string;
  links: { name: string, path: string }[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className='flex justify-center items-center'>
    <ul className='flex flex-col justify-center items-center'>
      <li className='text-slate-700 py-5 text-4xl font-poppinsRegular'>{title}</li>
      {links.map((link) => (
        <li key={link.name} className='text-slate-700 hover:text-gray-600/80 ease-in duration-100 font-bold text-xl'>
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
