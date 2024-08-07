import {
  DiCss3,
  DiDatabase,
  DiHtml5,
  DiJava,
  DiJsBadge,
  DiReact
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "oracle", name: "Oracle Sql", icon: <DiDatabase />},
];


const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p></p>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <h2>Em progresso</h2>
        <div className="technologies-grid">
        {progresso.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p></p>
            </div>
          </div>
        ))}
        </div>

        
        </div> */}
    </section>
  );
};

export default TechnologiesContainer;