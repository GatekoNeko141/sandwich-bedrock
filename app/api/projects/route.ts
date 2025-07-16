import { NextResponse } from 'next/server';

export async function GET() {
  const projects: Proyect[] = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      technologiesUsed: [
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          url: "https://www.typescriptlang.org/",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          url: "https://react.dev/",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          url: "https://nextjs.org/",
        },
      ],
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      technologiesUsed: [
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
      ],
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3.",
      image: "https://picsum.photos/1000/1000",
      urlGithub: "",
      urlDemo: "",
      technologiesUsed: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          url: "https://nodejs.org/",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          url: "https://expressjs.com/",
        },
      ],
    },
  ];

  return NextResponse.json(projects);
}