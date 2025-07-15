'use client';

import Image from 'next/image';
import st from './CardProject.module.scss';
import Link from 'next/link';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Props {
  data: Proyect;
}

const CardProject = ({ data }: Props) => {
  const CardProjectHTML = (<>
    <div className={st.card}>
      <Image
        className={st.cardImage}
        src={data.image}
        alt={data.title}
        width={1000}
        height={1000}
      />

      <div className={st.cardContent}>
        <h4 className="text-center">{data.title}</h4>
        <p className="text-center">{data.description}</p>

        <div className="d-flex justify-content-center gap-2">
          <Button
            component={Link}
            startIcon={<GitHubIcon />}
            variant="outlined"
            size="small"
            color="primary"
            href={data.urlGithub}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver Repo
          </Button>

          <Button
            component={Link}
            startIcon={<RemoveRedEyeIcon />}
            variant="outlined"
            size="small"
            color="primary"
            href={data.urlDemo}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver Demo
          </Button>
        </div>
      </div>
    </div>
  </>)
  
  return CardProjectHTML;
}

export default CardProject;