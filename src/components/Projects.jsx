import ProjectCard from "./ProjectCard";
import React, { useState, useRef } from "react";
import xyzimg from "/src/assets/Projetosimg/xyzagency.png";
import arinoimg from "/src/assets/Projetosimg/arino.png";
import bcimg from "/src/assets/Projetosimg/bcafeteria.png";
import dsfimg from "/src/assets/Projetosimg/dsfbank.png";
import itauimg from "/src/assets/Projetosimg/lpitau.png";
import esimg from "/src/assets/Projetosimg/escolajazz.png";

const projectsData = [
  {
    id: 1,
    title: "XYZ Agency",
    description: "Projeto responsivo, foram usadas as seguintes tecnologias: Jsx, React+Vite, TailwindCSS, Motion.",
    image: xyzimg,
    gitUrl: "https://github.com/RianBeckert/xyz_lp",
    previewUrl: "https://xyz-lp.vercel.app/"
  },
  {
    id: 2,
    title: "Arino Company",
    description: "Projeto responsivo, foram usadas as seguintes tecnologias: Jsx, React+Vite, TailwindCSS.",
    image: arinoimg,
    gitUrl: "https://github.com/RianBeckert/arino_lp",
    previewUrl: "https://arino-lp.vercel.app/"
  },
  {
    id: 3,
    title: "Bubble Coffe",
    description: "Projeto responsivo, foram usadas as seguintes tecnologias: Typescript, NextJS, SCSS.",
    image: bcimg,
    gitUrl: "https://github.com/RianBeckert/lp_cafeteria",
    previewUrl: "https://lp-cafeteria.vercel.app/"
  },
  {
    id: 4,
    title: "DSF Bank",
    description: "Projeto responsivo com imagens 3D, foram usadas as seguintes tecnologias: Typescript, NextJS, SCSS, Motion, Three.js.",
    image: dsfimg,
    gitUrl: "https://github.com/RianBeckert/dsf_bank",
    previewUrl: "https://dsf-bank-f7bb.vercel.app/"
  },
  {
    id: 5,
    title: "Landing Page Itaú",
    description: "Versão apenas para desktop, não foi feito o responsivo, tecnologias utilizadas: Typescript, NextJS, TailwindCSS.",
    image: itauimg,
    gitUrl: "https://github.com/RianBeckert/lp_itau",
    previewUrl: "https://lp-itau.vercel.app/"
  },
  {
    id: 6,
    title: "Escola de Jazz",
    description: "Projeto responsivo, foi utilizado apenas HTML e CSS, foi desenvolvido através de uma aula da OneBitCode.",
    image: esimg,
    gitUrl: "https://github.com/RianBeckert/Escola_Jazz",
    previewUrl: "https://escola-jazz.vercel.app/"
  },
]

const Projects = () => {
    return (
      <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8" id="projetos">Meus Projetos</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 md:grid  items-center  sm:py-16 xl:px-16">
          {projectsData.map((project) => (
        <ProjectCard
          key={project.id} 
          title={project.title} 
          description={project.description} 
          imgUrl={project.image} 
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          />))}
        </div>
      </>
    );
};

export default Projects;