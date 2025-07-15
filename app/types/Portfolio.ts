interface Data {
  image: string;
  nombre: string;
  apellido: string;
  subtitle: string;
  description: string;
  social: Social;
  skills: Skill[];
};

interface Social {
  github: string;
  linkedin: string;
};

interface Skill {
  name: string;
  icon: string;
  url: string;
};

interface Proyect {
  title: string;
  description: string;
  image: string;
  urlGithub: string;
  urlDemo: string;
  gallery: string[];
}