import { Metadata } from "next";

import st from "@/app/page.module.scss";
import CardsProject from "./components/CardProject";
import MainInfo from "./components/MainInfo";

export const metadata: Metadata = {
  title: "Portafolio de John Rodríguez Arteaga",
  description: "Portafolio personal de John Eymar Rodríguez Arteaga, ingeniero desarrollador web frontend con experiencia en tecnologías modernas.",
};

const Home = () => {
  return (
    <div className={st.page}>
      <div className={"position-relative"}>
        <MainInfo />
        <CardsProject />

        <footer className={`container position-relative d-flex flex-column flex-lg-row align-items-center justify-content-lg-between py-5`}>
          <p>© {new Date().getFullYear()} Gkko. Todos los derechos reservados.</p>
          <p>
            Desarrollado con ❤️ por John Rodríguez Arteaga
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;