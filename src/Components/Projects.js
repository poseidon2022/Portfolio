import {PROJECTS} from "../Constants/Constants"
import {motion} from "framer-motion"
export default function Projects() {
    return (
      <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-1 h-36 bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-20"></div>
        <div className="absolute bottom-24 right-6 w-0.5 h-28 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-25"></div>
  
        <div className="container mx-auto px-6">
          {/* Stylish Title Section */}
          <div className="relative my-20">
            <div className="flex items-center justify-center relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-28 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent"></div>
  
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-5xl lg:text-6xl font-thin tracking-tight relative"
              >
                <span className="relative">
                  Projects
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-60"></div>
                </span>
              </motion.h2>
  
              {/* Decorative dots */}
              <div className="absolute -left-8 top-1/2 w-2 h-2 bg-neutral-600 rounded-full opacity-40"></div>
              <div className="absolute -right-8 top-1/2 w-2 h-2 bg-neutral-600 rounded-full opacity-40"></div>
            </div>
          </div>
  
          {/* Projects Horizontal Cards */}
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Card background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 via-neutral-700/10 to-neutral-800/20 rounded-3xl blur-xl transform rotate-1"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/10 via-neutral-600/10 to-neutral-700/10 rounded-2xl blur-lg transform -rotate-1"></div>
  
                  {/* Main project card */}
                  <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 overflow-hidden transition-all duration-300 group-hover:border-neutral-600/50 group-hover:shadow-lg group-hover:shadow-neutral-800/20 h-full">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <img
                          width={150}
                          height={150}
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                      </motion.div>
                    </div>
  
                    {/* Project Content */}
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5 }}
                      className="p-6 space-y-4"
                    >
                      {/* Project Title */}
                      <div>
                        <h6 className="text-xl font-semibold text-white mb-2">{project.title}</h6>
                        <div className="w-12 h-px bg-gradient-to-r from-neutral-500 to-transparent"></div>
                      </div>
  
                      {/* Project Description */}
                      <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-neutral-600 via-neutral-500 to-neutral-600 opacity-30 rounded-full"></div>
                        <p className="text-neutral-300 text-sm leading-relaxed pl-6 line-clamp-3">
                          {project.description}
                        </p>
                      </div>
  
                      {/* Technologies */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-xs text-neutral-400 font-medium">Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center px-2 py-1 rounded-md bg-gradient-to-r from-neutral-800/80 to-neutral-700/80 border border-neutral-600/30 text-xs font-medium text-purple-200 backdrop-blur-sm transition-all duration-200 hover:border-purple-400/30 hover:shadow-sm hover:shadow-purple-400/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
  
                    {/* Card accent */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-neutral-600/20 to-neutral-700/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
  
                  {/* Floating accent */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-neutral-500 to-neutral-700 rounded-lg opacity-60"
                  ></motion.div>
                </motion.div>
              ))}
            </div>
  
            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-16 right-16 w-3 h-3 bg-gradient-to-br from-neutral-500 to-neutral-700 rounded-lg opacity-40"
            ></motion.div>
  
            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 11,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 5,
              }}
              className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full opacity-50"
            ></motion.div>
          </div>
        </div>
      </div>
    )
  }