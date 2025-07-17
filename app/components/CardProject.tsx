'use client';

import Image from 'next/image';
import st from './CardProject.module.scss';
import Link from 'next/link';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useEffect, useState } from 'react';
import { getProjects } from '../services/portfolioService';
import { Skeleton, Typography } from '@mui/material';

const CardsProject = () => {
  const [proyects, setProyects] = useState<Proyect[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getListProjects();
  }, []);

  const getListProjects = async () => {
    const response = await getProjects();
    setProyects(response);
    setLoading(false);
  }

  const CardProjectHTML = (<>
    <div className="w-100">
      <div className="container">
        <h3 className="h-divisor text-center mb-5">Proyectos</h3>

        <div className={st.cardContainer}>
          {
            loading ? (
              [1, 2, 3].map((item) => (
                <div key={item} className={st.card}>
                  <Skeleton variant="rectangular" height={250} />

                  <div className={st.cardContent}>
                    <Typography variant="h4"><Skeleton/></Typography>
                    <Typography component="p"><Skeleton/></Typography>

                    <div className="d-flex flex-wrap justify-content-center pt-1 gap-2">
                      <Skeleton variant="circular" height={30} width={30} />
                      <Skeleton variant="circular" height={30} width={30} />
                      <Skeleton variant="circular" height={30} width={30} />
                    </div>

                    <div className="d-flex justify-content-center gap-2">
                      <Skeleton variant="text" width={100} height={40}/>
                      <Skeleton variant="text" width={100} height={40}/>
                    </div>
                  </div>
                </div>
              ))
            ) : proyects.length === 0 ? (
              <p>No projects available.</p>
            ) : null
          }

          {
            proyects.map((proyecto, index) => (
              <div key={index} className={st.card}>
                <Image
                  className={st.cardImage}
                  src={proyecto.image}
                  alt={proyecto.title}
                  width={1000}
                  height={1000}
                />

                <div className={st.cardContent}>
                  <h4 className="text-center">{proyecto.title}</h4>
                  <p className={`${st.description} text-center m-0`}>{proyecto.description}</p>

                  <div className="d-flex flex-wrap justify-content-center">
                    {proyecto?.technologiesUsed.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex flex-column align-items-center m-1"
                        style={{ textDecoration: "none" }}
                      >
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={30}
                          height={30}
                        />
                      </a>
                    ))}
                  </div>

                  <div className="d-flex justify-content-center gap-2 mt-2">
                    {
                      proyecto.urlGithub && proyecto.urlGithub !== "" ? (
                        <Button
                          component={Link}
                          startIcon={<GitHubIcon />}
                          variant="outlined"
                          size="small"
                          color="primary"
                          href={proyecto.urlGithub}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Ver Repo
                        </Button>
                      ) : null
                    }

                    {
                      proyecto.urlDemo && proyecto.urlDemo !== "" ? (
                        <Button
                          component={Link}
                          startIcon={<RemoveRedEyeIcon />}
                          variant="outlined"
                          size="small"
                          color="primary"
                          href={proyecto.urlDemo}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Ver Demo
                        </Button>
                      ) : null
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </>)
  
  return CardProjectHTML;
}

export default CardsProject;