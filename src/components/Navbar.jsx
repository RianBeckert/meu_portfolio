import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-scroll';
import { FaXmark } from "react-icons/fa6"
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from "/src/assets/rlogo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // Ao usar scrol da efeito no navbar
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
    };

    window.addEventListener('scroll', handleScroll)

    return() => {
        window.addEventListener('scroll', handleScroll)
    }
})

{/* Array de NavLinks */}
const navItems = [
    {link: "Home", path:"inicio"},
    {link: "Habilidades", path:"habilidades"},
    {link: "Sobre", path:"sobre"},
    {link: "Projetos", path:"projetos"},
    {link: "Contato", path:"contact"}
]

    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-dark transition-all duration-300 ease-in" : "transition-all duration-300 ease-in"}`}>
                {/* Logo */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={Logo} alt="imagem" className="w-9 h-10 mr-2" />
                        <a href="/" className="text-white text-4xl fonte2">RIAN</a>
                    </div>

                    {/* Itens do menu */}
                    <ul className="md:flex space-x-10 hidden navitems">
                        {
                            navItems.map(({link,path}) => <Link to={path} key={path} activeClass="active" spy={true} smooth={true} offset={-100} className="block text-base text-white hover:text-bluee cursor-pointer text-3x1 font-semibold fonte">{link}</Link>)
                        }
                    </ul>

                    {/* Menu mobile */}
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none transition-all duration-300 ease-in" onClick={toggleMenu}>
                            {
                                isMenuOpen ? <FaXmark className="h-6 w-6"/> : <AiOutlineMenu className="h-6 w-6"/>
                            }
                        </button>
                    </div>
                </div>
                    {/* Navegação mobile */}
                    <div className={`space-y-4 px-4 mt-14 py-7 bg-dark transition-all duration-300 ease-in ${isMenuOpen ? "block fixed  top-0 right-0 left-0" : "hidden"}`}>
                        {   
                            navItems.map(({link,path}) => <Link to={path} activeClass="active" spy={true} smooth={true} offset={-100} key={path} className="block text-base text-white hover:text-bluee cursor-pointer text-3x1 font-semibold fonte">{link}</Link>)
                        }
                    </div>
            </nav>
        </header>
    );
};

export default Navbar;