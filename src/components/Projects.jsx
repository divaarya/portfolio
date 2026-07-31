function Projects() {
  const projects = [
    {
      title: "Sistem Absensi Siswa",
      description:
        "Website untuk mengelola data kehadiran siswa, status absensi, dan rekap laporan secara efisien.",
      tech: ["Laravel", "PHP", "MySQL"],
      image: "src/assets/img/absensi.jpeg",
    },
    {
      title: "Aplikasi Manajemen",
      description:
        "Website untuk mengelola data pengguna, laporan, dan proses administrasi.",
      tech: ["Laravel", "PHP", "Bootstrap"],
      image: "src/assets/img/managemen.jpeg",
    },
    {
      title: "Kalkulator",
      description:
        "Aplikasi kalkulator sederhana dengan operasi penjumlahan, pengurangan, perkalian, dan pembagian.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "src/assets/img/kalkulator.jpeg",
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
                  className="card-img-top"
                  alt={project.title}
                />

                <div className="card-body">

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        className="badge bg-primary me-2"
                        key={i}
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