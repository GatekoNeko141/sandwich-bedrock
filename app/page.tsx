import { Metadata } from "next";

import Image from "next/image";
import st from "@/app/page.module.scss";
import CardProject from "./components/CardProject";

export const metadata: Metadata = {
  title: "Portafolio de John Rodríguez Arteaga",
  description: "Portafolio personal de John Eymar Rodríguez Arteaga, ingeniero desarrollador web frontend con experiencia en tecnologías modernas.",
};

const Home = () => {
  const data: Data = {
    image: 'https://picsum.photos/1000/1000',
    nombre: "John Eymar",
    apellido: "Rodríguez Arteaga",
    subtitle: "Ingeniero Desarrollador Web Frontend",
    description: "Desarrollador web con experiencia en tecnologías modernas como React, Next.js, Angular y Vue.js. Apasionado por crear interfaces de usuario intuitivas y eficientes.",
    social: {
      github: "https://github.com/GatekoNeko141",
      linkedin: "https://www.linkedin.com/in/john-eymar-rodriguez/",
    },
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        url: "https://developer.mozilla.org/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        url: "https://developer.mozilla.org/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        url: "https://nextjs.org/",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        url: "https://react.dev/",
      },
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        url: "https://angular.io/",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        url: "https://vuejs.org/",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        url: "https://nodejs.org/",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        url: "https://www.php.net/",
      },
    ],
  }
  
  const proyects:Proyect[] = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      gallery: [
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
      ],
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      gallery: [
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
      ],
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      gallery: [
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
      ],
    },
    {
      title: "Proyecto 4",
      description: "Descripción del proyecto 4.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      gallery: [
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
      ],
    },
    {
      title: "Proyecto 5",
      description: "Descripción del proyecto 5.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      gallery: [
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
      ],
    },
    {
      title: "Proyecto 6",
      description: "Descripción del proyecto 6.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      gallery: [
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
        "https://picsum.photos/1000/1000",
      ],
    },
  ]

  return (
    <div className={st.page}>
      <div className={"position-relative"}>

        <div className={`${st.infoMain} d-flex text-center align-c-c`}>
          <div className="container">
            <Image
              className={st.pProfile}
              src={data.image}
              alt="Logo"
              width={200}
              height={200}
            />
            <h1>{data.nombre} {data.apellido}</h1>
            <h5>{data.subtitle}</h5>

            <div className="mx-auto my-4" style={{ maxWidth: "600px"}}>
              <p className="op-7">{data.description}</p>
            </div>

            <div className="d-flex align-c-c">
              <a
                className="btx btxPrimary"
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className={st.gitHubLogo}
                  width={20}
                  height={20}
                />
                GitHub
              </a>

              <a
                className="btx btxSecondary ms-2"
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                <span className="ms-2">LinkedIn</span>
              </a>
            </div>

            <div className="d-flex flex-wrap justify-content-center mt-3">
              {data.skills.map((skill, index) => (
                <a
                  key={index}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex flex-column align-items-center m-2"
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-100">
          <div className="container">
            <div className={st.cardContainer}>
              {
                proyects.map((proyecto, index) => (
                  <CardProject key={index} data={proyecto}/>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;