import Absensi from "../assets/img/absensi.jpeg";
import Manajemen from "../assets/img/managemen.jpeg";
import Kalkulator from "../assets/img/kalkulator.jpeg";

function Projects() {

const projects=[

{

title:"Sistem Absensi",

description:"Website untuk mengelola data kehadiran siswa, rekap absensi, serta laporan secara otomatis.",

tech:["Laravel","PHP","MySQL"],

image:Absensi,

color:"project-blue"

},

{

title:"Manajemen",

description:"Website untuk mengelola data pengguna, administrasi, dan laporan dengan tampilan yang sederhana.",

tech:["Laravel","PHP","Bootstrap"],

image:Manajemen,

color:"project-green"

},

{

title:"Kalkulator",

description:"Aplikasi kalkulator sederhana menggunakan HTML, CSS, dan JavaScript.",

tech:["HTML","CSS","JavaScript"],

image:Kalkulator,

color:"project-purple"

}

];

return(

<section id="projects">

<div className="container">

<div className="section-title">

<h2>My Projects</h2>

<p>
Beberapa project yang pernah saya kerjakan.
</p>

</div>

<div className="row g-4">

{projects.map((project,index)=>(

<div className="col-lg-4" key={index}>

<div className="project-card">

<div className={`project-header ${project.color}`}>

<h4>{project.title}</h4>

</div>

<img
src={project.image}
alt={project.title}
/>

<div className="card-body">

<p>

{project.description}

</p>

<div className="project-tech">

{project.tech.map((tech,i)=>(

<span key={i}>

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