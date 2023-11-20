import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactlogo from "/src/assets/react.png"
import html5 from "/src/assets/html5.png"
import css3 from "/src/assets/css3logo.png"
import js from "/src/assets/javascript.png"
import ts from "/src/assets/ts.png"
import tailwind from "/src/assets/tailwindcss.png"
import sass from "/src/assets/sass.png"
import nextjs from "/src/assets/nextjs.webp"
import vite from "/src/assets/vite.png"



const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return (
        <section>
          <div className=" bg-[#2c2b2b] rounded-full text-center py-16 px-12 mt-10 relative md:mt-[-60px] mx-2" id="habilidades">
            <h2 className="text-3xl font-bold text-white mb-8">Habilidades</h2>
            <Carousel responsive={responsive} infinite={true} className="skil-slider">
              <div>
                <img src={reactlogo} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">React JS</h5> 
              </div>
              <div>
                <img src={html5} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">HTML5</h5>
              </div>
              <div>
                <img src={css3} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">CSS3</h5>
              </div>
              <div>
                <img src={js} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">JavaScript</h5>
              </div>
              <div>
                <img src={ts} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">TypeScript</h5>
              </div>
              <div>
                <img src={tailwind} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">Tailwind CSS</h5>
              </div>
              <div>
                <img src={sass} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">SASS</h5>
              </div>
              <div>
                <img src={nextjs} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">Next JS</h5>
              </div>
              <div>
                <img src={vite} alt="image" className="w-1/2 mx-auto mb-4" />
                <h5 className="text-white text-2xl font-semibold">Vite</h5>
              </div>
            </Carousel>
          </div>
        </section>
      );
    
};

export default Skills;