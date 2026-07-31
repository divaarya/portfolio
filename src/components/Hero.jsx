function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1>
              Hi, I'm <span>Diva Arya</span>
            </h1>

            <h3>Backend Developer Enthusiast</h3>

            <p>
              Saya merupakan siswa <b>SMK Raden Umar Said </b>
              jurusan <b>Rekayasa Perangkat Lunak (RPL)</b>.
              Saya memiliki minat dalam pengembangan aplikasi
              berbasis web, khususnya pada sisi backend menggunakan
              <b> PHP, Laravel, MySQL</b>, serta senang mempelajari
              teknologi baru untuk membangun aplikasi yang rapi,
              efisien, dan mudah dikembangkan.
            </p>

            <a href="#projects" className="btn btn-primary me-3">
              My Projects
            </a>

            <a href="#contact" className="btn btn-outline-dark">
              Contact Me
            </a>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="src/assets/img/aku.jpg"
              alt="Diva Arya Prasetya Alamsyah Sujatmica"
              className="img-fluid rounded-circle shadow hero-img"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;