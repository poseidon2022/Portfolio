import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            
            {/* Left side - Social Icons */}
            <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-300">
                <a href="https://github.com/poseidon2022" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/kidus-melaku/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/kidus_mlk/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://t.me/kidusmk" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                <a href="https://leetcode.com/apollo_2022" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            </div>

            {/* Right side - Resume Button */}
            <div className="mr-8">
                <a
                    href="/Kidus_Simegne_Resume.pdf" // <-- Update this path to your resume
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm font-semibold 
                    bg-gradient-to-r from-purple-600/70 to-purple-500/70 
                    text-white border border-purple-400/40 
                    hover:from-purple-600 hover:to-purple-500 
                    hover:shadow-lg hover:shadow-purple-500/20 
                    transition-all"
                >
                    Resume
                </a>
            </div>

        </nav>
    );
}
