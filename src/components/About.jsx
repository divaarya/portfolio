function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-secondary">
            Perkenalan singkat mengenai diri saya.
          </p>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-5 text-center">

            <img
              src="src/assets/img/coding.jpg"
              alt="Diva Arya Prasetya Alamsyah Sujatmica"
              className="img-fluid rounded-4 shadow"
            />

          </div>

          <div className="col-lg-7">

            <h3 className="fw-bold mb-3">
              Backend Developer Enthusiast
            </h3>

            <p>
              Halo! Saya <b>Diva Arya Prasetya Alamsyah Sujatmica</b>, siswa
              <b> SMK Raden Umar Said</b> jurusan
              <b> Rekayasa Perangkat Lunak (RPL)</b>.
            </p>

            <p>
              Saya memiliki minat dalam pengembangan aplikasi
              berbasis web, khususnya pada sisi backend
              menggunakan Laravel, PHP, dan MySQL.
            </p>

            <p>
              Saya merupakan pribadi yang suka belajar hal baru,
              mudah beradaptasi, bertanggung jawab,
              serta senang bekerja sama dalam tim untuk
              menghasilkan aplikasi yang bermanfaat.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;