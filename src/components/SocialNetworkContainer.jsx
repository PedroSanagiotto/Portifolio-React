import { FaLinkedinIn, FaGithub} from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const linkedIn = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  
];

const git = [
  { name: "github", icon: <FaGithub /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {linkedIn.map((network) => (
        <a href="https://www.linkedin.com/in/pedro-henrique-sanagiotto/" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
        
      ))}
      {git.map((network) => (
        <a href="https://github.com/PedroSanagiotto" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
      
    </section>
  );
};

export default SocialNetworkContainer;