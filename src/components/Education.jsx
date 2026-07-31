function Education() {
  return (
    <section id="education" className="py-5">

      <div className="container">

        <div className="text-center mb-4">
          <h2 className="fw-bold">Education</h2>
          <p className="text-secondary">
            Riwayat pendidikan saya.
          </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-7">

            <div className="education-card">

              <h3>SMK Raden Umar Said</h3>

              <h5>Rekayasa Perangkat Lunak (RPL)</h5>

              <div className="education-year">
                2023 - Sekarang
              </div>

              <p>
                Fokus mempelajari pengembangan website,
                backend development menggunakan Laravel,
                PHP, MySQL, REST API serta Git.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;