import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){

return(

<footer className="footer">

<div className="container">

<h4>Diva Arya Prasetya Alamsyah Sujatmica</h4>

<p>

Backend Developer • Laravel • PHP • MySQL

</p>

<div className="footer-social">

<a
href="https://github.com/divaarya"
target="_blank"
rel="noreferrer"
>

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/diva-arya-112944329/"
target="_blank"
rel="noreferrer"
>

<FaLinkedin/>

</a>

</div>

<p className="mt-4">

© {new Date().getFullYear()} Diva Arya. All Rights Reserved.

</p>

</div>

</footer>

);

}

export default Footer;