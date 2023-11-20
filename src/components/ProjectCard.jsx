import { HiCodeBracket } from "react-icons/hi2";
import { AiFillEyeInvisible } from "react-icons/ai";

const ProjectCard = ( { imgUrl, title, description, gitUrl, previewUrl }) => {
 
    return (
        <div>
            <div 
            className="h-52 md:h-72 rounded-t-xl relative group" 
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-blue-200 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-30  transition-all duration-500">
                <a href={gitUrl} target="_blank" className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#ADB7BE] hover:border-white">
                <HiCodeBracket className="h-10 w-10  text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
                </a>
                <a href={previewUrl} target="_blank" className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
                <AiFillEyeInvisible className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
                </a>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-2 bg-[#2c2b2b] after:py-6 px-4 flex items-center justify-center flex-col">
                <h5 className="text-xl font-semibold">{title}</h5>
                <p className="text-[#ADB7BE] fonte">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;