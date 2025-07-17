import { use } from "react";
import { Tooltip } from "@mui/material";
import { getMainInfo } from "../services/portfolioService";

import Image from "next/image";
import st from './MainInfo.module.scss';

const MainInfo = () => {
  const data:Data = use(getMainInfo());

  const MainInfoHTML = (<>
    <div className={`${st.infoMain} d-flex text-center align-c-c`}>
      <div className="container">
        <Image
          className={st.pProfile}
          src={data?.image}
          alt="Logo"
          width={200}
          height={200}
        />
        <h1>{data?.nombre} {data?.apellido}</h1>
        <h5>{data?.subtitle}</h5>

        <div className="mx-auto my-4" style={{ maxWidth: "600px"}}>
          <p className="op-7">{data?.description}</p>
        </div>

        <div className="d-flex align-c-c">
          <a
            className="btx btxPrimary"
            href={data?.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
            GitHub
          </a>

          <a
            className="btx btxSecondary ms-2"
            href={data?.social.linkedin}
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
          {data?.skills.map((skill, index) => (
            <Tooltip title={skill.name} key={index}>
              <a
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
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  </>)
  
  return MainInfoHTML
}

export default MainInfo
