import {
  FaPhp,
  FaLaravel,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaCode,
  FaLink,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaCode />, name: "VS Code" },
    { icon: <FaLink />, name: "REST API" },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Skills</h2>

          <p className="text-secondary">
            Teknologi yang saya gunakan dalam pengembangan aplikasi web.
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="skill-card text-center">
                <div className="skill-icon">{skill.icon}</div>

                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;