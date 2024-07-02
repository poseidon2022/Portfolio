
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
export default function Navbar() {
    
    return (
        <nav className = "mb-20 flex items-center justify-between py-6">
            <div className = "m-8 flex items-center justify-center gap-4 text-2xl">
                <a href = "https://github.com/poseidon2022"><FaGithub/></a>
                <a href = "https://www.linkedin.com/in/kidus-melaku-1b132220b/"><FaLinkedin/></a>
                <a href = "https://www.instagram.com/kidus_melaku_/"><FaInstagram/></a>
                <a href = "https://t.me/kidus_m3l"><FaTelegram/></a>
                <a href = "https://leetcode.com/apollo_2022"><SiLeetcode/></a>
            </div>
        </nav>
    )

}