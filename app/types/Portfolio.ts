interface Data {
  image: string;
  nombre: string;
  apellido: string;
  subtitle: string;
  description: string;
  social: Social;
  skills: Tech[];
};

interface Social {
  github: string;
  linkedin: string;
};

interface Tech {
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
  technologiesUsed: Tech[];
}