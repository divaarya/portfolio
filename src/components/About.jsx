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

        <div className="row align-items-center">

          <div className="col-lg-5 text-center">

            <img
              src={Foto}
              alt="Diva Arya Prasetya Alamsyah Sujatmica"
              className="img-fluid rounded-4 shadow"
            />

          </div>

          <div className="col-lg-7">

            <h3 className="fw-bold mb-3">
              Backend Developer
            </h3>

            <p>
              Halo! Saya <b>Diva Arya Prasetya Alamsyah Sujatmica</b>,
              siswa <b>SMK Raden Umar Said</b> jurusan
              <b> Rekayasa Perangkat Lunak (RPL)</b>.
            </p>

            <p>
              Saya memiliki minat dalam pengembangan aplikasi berbasis web,
              khususnya pada pengembangan <b>backend</b> menggunakan
              <b> PHP, Laravel, dan MySQL</b>. Saya senang membangun aplikasi
              yang terstruktur, mudah dikembangkan, dan memiliki performa yang baik.
            </p>

            <p>
              Saya adalah pribadi yang disiplin, cepat belajar, mudah
              beradaptasi, serta mampu bekerja sama dalam tim maupun secara
              mandiri. Saya selalu berusaha meningkatkan kemampuan dengan
              mempelajari teknologi baru dan mengerjakan berbagai proyek
              pengembangan web.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;