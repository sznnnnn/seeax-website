'use client';
import Hero from './hero-section/Hero';
import { useEffect } from 'react';
import PreLoader from './animations/PreLoader/PreLoader';
import dynamic from 'next/dynamic';

const Work = dynamic(() => import('./work-section/Work'), { ssr: false });
const About = dynamic(() => import('./about-section/About'), { ssr: false });
const Contact = dynamic(() => import('./contact-section/Contact'), { ssr: false });

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />
      <main className='flex flex-col items-center justify-center'>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}
