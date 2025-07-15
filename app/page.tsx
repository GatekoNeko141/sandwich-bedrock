import { Metadata } from "next";

import st from "@/app/page.module.scss";
import CardProject from "./components/CardProject";
import MainInfo from "./components/MainInfo";

export const metadata: Metadata = {
  title: "Portafolio de John Rodríguez Arteaga",
  description: "Portafolio personal de John Eymar Rodríguez Arteaga, ingeniero desarrollador web frontend con experiencia en tecnologías modernas.",
};

const Home = () => {
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

        <MainInfo />

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