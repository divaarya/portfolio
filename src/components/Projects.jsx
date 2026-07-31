import Absensi from "../assets/img/absensi.jpeg";
import Managemen from "../assets/img/managemen.jpeg";
import Kalkulator from "../assets/img/kalkulator.jpeg";

function Projects() {

  const projects = [
    {
      title: "Sistem Absensi Siswa",
      description:
        "Website untuk mengelola data kehadiran siswa, status absensi, dan rekap laporan secara efisien.",
      tech: ["Laravel", "PHP", "MySQL"],
      image: Absensi,
    },
    {
      title: "Aplikasi Manajemen",
      description:
        "Website untuk mengelola data pengguna, laporan, dan proses administrasi.",
      tech: ["Laravel", "PHP", "Bootstrap"],
      image: Managemen,
    },
    {
      title: "Kalkulator",
      description:
        "Aplikasi kalkulator sederhana dengan operasi penjumlahan, pengurangan, perkalian, dan pembagian.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: Kalkulator,
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">My Projects</h2>
          <p className="text-secondary">
            Beberapa project yang pernah saya kerjakan.
          </p>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-lg-4" key={index}>

              <div className="card project-card h-100">

                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                />

                <div className="card-body">

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-primary me-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;