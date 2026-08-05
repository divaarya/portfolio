import {
FaWhatsapp,
FaEnvelope,
FaGithub,
FaLinkedin,
} from "react-icons/fa";

function Contact(){

return(

<section id="contact">

<div className="container">

<div className="contact-wrapper">

<div className="contact-title">

<h2>Let's Connect</h2>

<p>

Terima kasih telah mengunjungi portfolio saya.
Jika Anda ingin berdiskusi, bekerja sama, atau memiliki pertanyaan,
silakan hubungi saya melalui salah satu kontak di bawah ini.

</p>

</div>

<div className="row g-4">

<div className="col-lg-3 col-md-6">

<div className="contact-card">

<div className="contact-icon whatsapp">

<FaWhatsapp/>

</div>

<h4>WhatsApp</h4>

<p>085717261448</p>

<a
href="https://wa.me/6285717261448"
target="_blank"
rel="noreferrer"
>

Chat Sekarang

</a>

</div>

</div>

<div className="col-lg-3 col-md-6">

<div className="contact-card">

<div className="contact-icon email">

<FaEnvelope/>

</div>

<h4>Email</h4>

<p>

divaarya055@gmail.com

</p>

<a

href="mailto:divaarya055@gmail.com"

>

Kirim Email

</a>

</div>

</div>

<div className="col-lg-3 col-md-6">

<div className="contact-card">

<div className="contact-icon github">

<FaGithub/>

</div>

<h4>GitHub</h4>

<p>

github.com/divaarya

</p>

<a

href="https://github.com/divaarya"

target="_blank"

rel="noreferrer"

>

Lihat GitHub

</a>

</div>

</div>

<div className="col-lg-3 col-md-6">

  <div className="contact-card">

    <div className="contact-icon linkedin">

      <FaLinkedin/>

    </div>

    <h4>LinkedIn</h4>

    <p>

      linkedin.com/in/diva-arya-112944329

    </p>

    <a
      href="https://www.linkedin.com/in/diva-arya-112944329/"
      target="_blank"
      rel="noreferrer"
    >

      Lihat Profil

    </a>

  </div>

</div>

</div>

</div>

</div>

</section>

);

}

export default Contact;