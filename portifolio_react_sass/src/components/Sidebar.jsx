import React from 'react';
import Avatar from '../img/eu.png';
import Curriculo from '../Curriculo/Pedro Henrique Sanagiotto.pdf'
import '../styles/components/sidebar.sass';
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer"

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Pedro Sanagiotto" />
    <p className='title'>Desenvolvedor FrontEnd</p>
    <SocialNetworkContainer />
    <InformationContainer />
    <a href={Curriculo} download="Curriculo.pdf" className='btn'> Download currículo</a>

  </aside>
};

export default Sidebar;