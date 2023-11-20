import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import logo from "/src/assets/rlogo.png";

const Footer = () => {
    return (
        <footer class="rounded-lg shadow">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between flex items-center justify-center  flex-col md:flex-row">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} alt="" className="w-9 h-10 mr-2" />
                        <a href="/" className="text-white text-4xl fonte2">RIAN</a>
                    </a>
                    <div className='flex text-white'>
                        <a href="https://www.linkedin.com/in/rian-marlon-beckert-0952511b6/" target="_blank">
                            <FaLinkedin className="w-10 h-10 cursor-pointer" />
                        </a>
                        <a href="https://github.com/RianBeckert" target="_blank">
                            <FaGithubSquare className="w-10 h-10 cursor-pointer" />
                        </a>
                    </div>
                </div>
                <hr class="my-6 sm:mx-auto dark:border-[#2c2b2b]  lg:my-8"/>
                <span class="flex text-sm text-white sm:text-center  items-center justify-center">© 2024 <a href="/" class="hover:underline">RIAN</a>. Todos os direitos reservados.</span>
            </div>
        </footer>


    );
};

export default Footer;