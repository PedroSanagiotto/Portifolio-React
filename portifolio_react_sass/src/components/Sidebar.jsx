import React from 'react';
import Avatar from '../img/eu.png';
import '../styles/components/sidebar.sass';
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer"

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Pedro Sanagiotto" />
    <p className='title'>Desenvolvedor FrontEnd</p>
    <SocialNetworkContainer />
    <InformationContainer />
    <a href='' className='btn'> Download currículo</a>

  </aside>
};

export default Sidebar;