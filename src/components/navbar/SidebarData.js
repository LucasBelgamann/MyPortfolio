import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Início',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Sobre mim',
    path: '#about-title',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Projetos',
    path: '#projects',
    icon: <AiIcons.AiFillFolder />,
    cName: 'nav-text'
  },
  {
    title: 'Habilidades',
    path: '#hards',
    icon: <FaIcons.FaLaptopCode />,
    cName: 'nav-text'
  },
  {
    title: 'Contato',
    path: '#contact',
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