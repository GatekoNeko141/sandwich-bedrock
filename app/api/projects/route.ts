import { NextResponse } from 'next/server';

export async function GET() {
  const projects: Proyect[] = [
    {
      title: "Landing Nuvix",
      description: "Página web dedicada a la gestión de casilleros virtuales y servicios logísticos, permitiendo a los usuarios recibir, almacenar y enviar paquetes de manera eficiente y segura.",
      image: "https://fyk2pgosecdw9j7w.public.blob.vercel-storage.com/images/Screenshot_1.webp",
      urlGithub: "",
      urlDemo: "https://www.nuvix.co",
      technologiesUsed: [
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          url: "https://vuejs.org/",
        },
        {
          name: "Nuxt.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
          url: "https://nuxt.com/",
        },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          url: "https://graphql.org/",
        },
      ],
    },
    {
      title: "Victoriana",
      description: "Página de comercio dedicada a la venta de artículos para el hogar y decoración, ofreciendo una amplia gama de productos para embellecer y equipar espacios.",
      image: "https://fyk2pgosecdw9j7w.public.blob.vercel-storage.com/images/Screenshot_2.webp",
      urlGithub: "",
      urlDemo: "https://victoriana.adquiria.com.uy",
      technologiesUsed: [
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          url: "https://angular.io/",
        },
        {
          name: "RxJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg",
          url: "https://rxjs.dev/",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          url: "https://getbootstrap.com/",
        },
      ],
    },
  ];

  return NextResponse.json(projects);
}