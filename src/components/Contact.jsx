import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">

      <div className="container text-center">

        <h2 className="fw-bold mb-3">
          Contact Me
        </h2>

        <p className="text-secondary mb-5">
          Terima kasih telah mengunjungi portfolio saya.
          Jangan ragu untuk menghubungi saya.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">

          {/* Email */}
          <a
            href="mailto:divaarya055@gmail.com"
            className="btn btn-primary"
          >
            <FaEnvelope className="me-2" />
            Email
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6285717261448"
            target="_blank"
            rel="noreferrer"
            className="btn btn-success"
          >
            <FaWhatsapp className="me-2" />
            WhatsApp
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/divaarya"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            <FaGithub className="me-2" />
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;