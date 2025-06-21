import { EXPERIENCES } from "../Constants/Constants"
import {motion} from "framer-motion"
export default function Experience() {
    return (
      <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-16 left-6 w-1 h-40 bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-20"></div>
        <div className="absolute bottom-20 right-8 w-0.5 h-32 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-25"></div>
  
        <div className="container mx-auto px-6">
          {/* Stylish Title Section */}
          <div className="relative my-20">
            <div className="flex items-center justify-center relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-32 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent"></div>
  
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-5xl lg:text-6xl font-thin tracking-tight relative"
              >
                <span className="relative">
                  Experience
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-60"></div>
                </span>
              </motion.h2>
  
              {/* Decorative dots */}
              <div className="absolute -left-8 top-1/2 w-2 h-2 bg-neutral-600 rounded-full opacity-40"></div>
              <div className="absolute -right-8 top-1/2 w-2 h-2 bg-neutral-600 rounded-full opacity-40"></div>
            </div>
          </div>
  
          {/* Experience Cards */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-600 via-neutral-500 to-neutral-600 opacity-30"></div>
  
            <div className="space-y-12">
              {EXPERIENCES.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 lg:left-1/4 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full border-2 border-neutral-800 z-10"></div>
  
                  <div className="flex flex-wrap lg:justify-center items-start">
                    {/* Year Section */}
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1 }}
                      className="w-full lg:w-1/4 mb-4 lg:mb-0"
                    >
                      <div className="lg:text-right lg:pr-8">
                        <div className="inline-block lg:block bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-neutral-700/30">
                          <p className="text-sm text-neutral-300 font-medium">{experience.year}</p>
                        </div>
                      </div>
                    </motion.div>
  
                    {/* Experience Card */}
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1 }}
                      className="w-full lg:w-3/4 group"
                    >
                      <div className="relative">
                        {/* Card background effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 via-neutral-700/10 to-neutral-800/20 rounded-2xl blur-xl transform rotate-1"></div>
                        <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/10 via-neutral-600/10 to-neutral-700/10 rounded-2xl blur-lg transform -rotate-1"></div>
  
                        {/* Main card */}
                        <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 lg:p-8 transition-all duration-300 group-hover:border-neutral-600/50 group-hover:shadow-lg group-hover:shadow-neutral-800/20">
                          {/* Role and Company */}
                          <div className="mb-4">
                            <h6 className="text-xl lg:text-2xl font-semibold mb-2 text-white">{experience.role}</h6>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-purple-100 font-medium">{experience.company}</span>
                            </div>
                          </div>
  
                          {/* Description */}
                          <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-neutral-600 via-neutral-500 to-neutral-600 opacity-30 rounded-full"></div>
                            <p className="text-neutral-300 leading-relaxed pl-6">{experience.description}</p>
                          </div>
  
                          {/* Card accent */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-neutral-600/20 to-neutral-700/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-12 right-12 w-3 h-3 bg-gradient-to-br from-neutral-500 to-neutral-700 rounded-lg opacity-40"
            ></motion.div>
  
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 4,
              }}
              className="absolute bottom-16 left-16 w-2 h-2 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full opacity-50"
            ></motion.div>
          </div>
        </div>
      </div>
    )
  }