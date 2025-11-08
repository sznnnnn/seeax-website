'use client';
import Link from 'next/link';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className='fixed bottom-10 left-0 right-0 z-50 my-0  mx-auto  flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#ffffff]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[391.3px]'>
      <Link
        href='https://drive.google.com/file/d/1Mmwl-FRGPm5QVe3AjtukJr_Jpc366Ear/view'
        target='_blank'
        className='flex'
        aria-label='Open my resume'
        data-blobity-tooltip='View Resume'
        data-blobity-magnetic='false'>
        <FontAwesomeIcon
          icon={faFilePdf}
          className='py-2 px-2 text-[16px] sm:px-4 md:py-1'
        />
      </Link>

      <Link
        href='#home'
        data-blobity-magnetic='false'
        onClick={handleScroll}
        aria-label='Scroll to Home Section'>
        <h4 className='rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4'>
          {t.home}
        </h4>
      </Link>
      <Link
        href='#work'
        data-blobity-magnetic='false'
        onClick={handleScroll}
        aria-label='Scroll to Work Section'>
        <h4 className='rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4'>
          {t.work}
        </h4>
      </Link>

      <Link
        href='#about'
        data-blobity-magnetic='false'
        onClick={handleScroll}
        aria-label='Scroll to About Section'>
        <h4 className='rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4'>
          {t.about}
        </h4>
      </Link>

      <Link
        href='#contact'
        data-blobity-magnetic='false'
        onClick={handleScroll}
        aria-label='Scroll to Contact Section'>
        <h4 className='rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4'>
          {t.contact}
        </h4>
      </Link>

      <button
        onClick={toggleLanguage}
        className='rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200'
        aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}>
        {language === 'en' ? '中文' : 'EN'}
      </button>
    </nav>
  );
};

export default NavBar;
