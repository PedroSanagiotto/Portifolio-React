import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Phone</h3>
          <p>(55)99715-0809</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>Mail</h3>
          <p>phsanagiotto@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Location</h3>
          <p>Santa Rosa / RS - Brazil</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;