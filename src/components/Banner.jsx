import avatar from "/src/assets/avatar4.png";
import resume from "/src/assets/curriculo2023.pdf";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <section className="planodefundo relative z-0" style={{ minHeight: "800px" }}  id="inicio">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Textos */}
        
        <div className="col-span-7 place-self-center mt-40 text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold text-center sm:text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-800">Olá, eu sou {""}</span>
            <br />
            <TypeAnimation
            sequence={[
              'Rian Marlon Beckert',
              1000, 
              'Web Developer',
              1000,
              'Front-End Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          </h1>
          <p className="text-white text-lg mb-6 lg:text-xl fonte text-center sm:text-left lg:text-center">
          Bem vindo ao meu Portfólio, descubra mais sobre mim e de uma olhada em meus projetos!
          </p>
          {/* Botões */}
          <div>
            <a href="#contact">
            <button className="w-full px-3 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-800 text-white hover:bg-gradient-to-br hover:from-purple-500 hover:via-blue-500 hover:to-blue-800">Contato</button>
            </a>
            <a href={resume} download="Rian Marlon Beckert">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-purple-800 hover:bg-slate-800 text-white  mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
              </button>
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="col-span-5 place-self-center mt-04 lg:mt-0">
          <div className="rounded-full bg-[#2c2b2b] w-[350px] h-[350px] lg:w-[350px] lg-h[350px] relative mt-40">
            <img
              src={avatar}
              alt=""
              className="max-w-xs absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;