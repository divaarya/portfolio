import Foto from "../assets/img/coding.jpg";

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-secondary">
            Mengenal lebih dekat tentang saya.
          </p>
        </div>

        <div className="about-box">

  <div className="row align-items-center">

    <div className="col-lg-5 text-center">

      <img
        src={Foto}
        alt="Diva Arya"
        className="img-fluid"
      />

    </div>

    <div className="col-lg-7">

      <h3>Backend Developer</h3>

      <p>
        Halo! Saya <b>Diva Arya Prasetya Alamsyah Sujatmica</b>,
        siswa <b>SMK Raden Umar Said</b> jurusan
        <b> Rekayasa Perangkat Lunak (RPL)</b>.
      </p>

      <p>
        Saya berfokus pada pengembangan aplikasi web,
        khususnya di sisi backend menggunakan
        <b> PHP, Laravel, dan MySQL</b>.
        Saya menyukai proses membangun sistem yang
        rapi, efisien, dan mudah dikembangkan.
      </p>

      <p>
        Saya merupakan pribadi yang disiplin,
        mudah beradaptasi, bertanggung jawab,
        serta senang mempelajari teknologi baru
        untuk meningkatkan kemampuan saya.
      </p>

      <div className="about-info">

        <div className="about-item">
          <h4>Domisili</h4>
          <p>Kudus</p>
        </div>

        <div className="about-item">
          <h4>Sekolah</h4>
          <p>SMK RUS</p>
        </div>

        <div className="about-item">
          <h4>Fokus</h4>
          <p>Backend</p>
        </div>

      </div>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default About;