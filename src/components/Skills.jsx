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
  {
    icon: <FaPhp />,
    name: "PHP",
    color: "#777BB3",
  },
  {
    icon: <FaLaravel />,
    name: "Laravel",
    color: "#FF2D20",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    color: "#00758F",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
    color: "#7952B3",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "#F05032",
  },
  {
    icon: <FaCode />,
    name: "VS Code",
    color: "#007ACC",
  },
  {
    icon: "🔗",
    name: "REST API",
    color: "#2563eb",
  },
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
                <div
  className="skill-icon"
  style={{ color: skill.color }}
>
  {skill.icon}
</div>

                <h5>{skill.name}</h5>

<p>
  Teknologi yang sering saya gunakan
</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;