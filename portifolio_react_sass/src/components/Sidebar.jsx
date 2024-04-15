import React from 'react';
import Avatar from '../img/eu.png';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Pedro Sanagiotto" />
    <p className='title'>Desenvolvedor FrontEnd</p>
    <p>redes sociais</p>
    <p>informaçoes de contato</p>
    <a href='' className='btn'> Download currículo</a>

  </aside>
};

export default Sidebar;