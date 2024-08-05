import React from 'react';
import Certificados from '../Certificados/Certificados.pdf';
import Curriculo from '../Curriculo/Pedro Henrique Sanagiotto.pdf';
import Avatar from '../img/eu.png';
import '../styles/components/sidebar.sass';
import InformationContainer from "./InformationContainer";
import SocialNetworkContainer from "./SocialNetworkContainer";

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Pedro Sanagiotto" />
    <p className='title'>Desenvolvedor</p>
    <SocialNetworkContainer />
    <InformationContainer />
    <a href={Curriculo} download="Curriculo.pdf" className='btn'> Download currículo</a>
    <a href={Certificados} download="Certificados.pdf" className='btn'> Download certificados</a>

  </aside>
};

export default Sidebar;