import { RiReactjsFill } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { SiProteus } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { DiMysql } from "react-icons/di"
import { DiJava } from "react-icons/di"
import { DiPython } from "react-icons/di"
import {RiCpuFill} from "react-icons/ri"
import { VscFileCode } from "react-icons/vsc";
import {SiCplusplus} from "react-icons/si"
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-8 w-1 h-32 bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-20"></div>
      <div className="absolute bottom-32 right-12 w-0.5 h-24 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-25"></div>

      <div className="container mx-auto px-6">
        {/* Stylish Title Section */}
        <div className="relative my-20">
          <div className="flex items-center justify-center relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-32 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent"></div>

            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="text-5xl lg:text-6xl font-thin tracking-tight relative"
            >
              <span className="relative">
                Technologies
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-60"></div>
              </span>
            </motion.h2>

            {/* Decorative dots */}
            <div className="absolute -left-8 top-1/2 w-2 h-2 bg-neutral-600 rounded-full opacity-40"></div>
            <div className="absolute -right-8 top-1/2 w-2 h-2 bg-neutral-600 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Technologies Grid with Enhanced Styling */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-4 gap-8 h-full">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="border border-neutral-700 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Main icons container */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* React */}
            <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-400/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:shadow-lg group-hover:shadow-cyan-400/10">
                <RiCpuFill className="text-7xl text-cyan-400 mx-auto" />
                <p className="text-center text-cyan-300 font-medium tracking-wide drop-shadow-[0_0_6px_rgba(34,211,238,0.35)]">
                  SystemVerilog
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Proteus */}
            <motion.div variants={iconVariants(1.4)} initial="initial" animate="animate" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-400/10 via-transparent to-neutral-400/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 transition-all duration-300 group-hover:border-neutral-400/30 group-hover:shadow-lg group-hover:shadow-neutral-400/10">
                <SiProteus className="text-7xl text-neutral-300 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* C++ */}
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-400/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 transition-all duration-300 group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-400/10">
                <SiCplusplus className="text-7xl text-blue-400 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Node.js */}
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-lg group-hover:shadow-green-500/10">
                <FaNodeJs className="text-7xl text-green-500 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Python */}
            <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 transition-all duration-300 group-hover:border-yellow-400/30 group-hover:shadow-lg group-hover:shadow-yellow-400/10">
                <DiPython className="text-7xl text-yellow-400 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Java */}
            <motion.div variants={iconVariants(3.9)} initial="initial" animate="animate" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 transition-all duration-300 group-hover:border-orange-500/30 group-hover:shadow-lg group-hover:shadow-orange-500/10">
                <DiJava className="text-7xl text-orange-500 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* MongoDB */}
            <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-lg group-hover:shadow-green-500/10">
                <SiMongodb className="text-7xl text-green-500 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* MySQL */}
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 transition-all duration-300 group-hover:border-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/10">
                <DiMysql className="text-7xl text-red-500 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-br from-neutral-500 to-neutral-700 rounded-full opacity-40"
          ></motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute bottom-12 left-12 w-2 h-2 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full opacity-50"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}
