import teste from "/src/assets/setup2.jpg"
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";


const About = () => {
    return (
        <section className="text-white mb-40" id="sobre">
            <div className="md:grid md:grid-cols-2 items-center py-1 px-4xl:gap-16  sm:py-16 xl:px-16 gap-8">
                <img src={teste} alt="" className="w-[700px] h-[400px] border-2 border-white" />
                <div className="">
                    <h2 className="text-7xl font-bold mb-4 text-center md:text-left">Um pouco sobre mim</h2>
                    <hr className="mt-10" />
                    <p className="fonte md:text-lg lg:text-lg text-center md:text-left mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <div className="flex gap-2 mt-2 items-center justify-center md:justify-start">
                        <a href="https://www.linkedin.com/in/rian-marlon-beckert-0952511b6/" target="_blank">
                            <FaLinkedin className="w-10 h-10 cursor-pointer" />
                        </a>
                        <a href="https://github.com/RianBeckert" target="_blank">
                            <FaGithubSquare className="w-10 h-10 cursor-pointer" />
                        </a>
                        <a href="mailto:rianmarlonb@gmail.com" target="_blank">
                            <MdEmail className=" w-12 h-12 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;