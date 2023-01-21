import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About me',
    path: '#about-title',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '#projects',
    icon: <AiIcons.AiFillFolder />,
    cName: 'nav-text'
  },
  {
    title: 'Hards skills',
    path: '#hards',
    icon: <FaIcons.FaLaptopCode />,
    cName: 'nav-text'
  },
  {
    title: ' Contact me',
    path: '#footer',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];