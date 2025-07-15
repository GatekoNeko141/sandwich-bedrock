import { NextResponse } from 'next/server';

export async function GET() {
  const data:Data = {
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
  };

  return NextResponse.json(data);
}