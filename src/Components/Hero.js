import { HERO_CONTENT} from "../Constants/Constants"
import Profile from "../asset/Profile.png"
import {motion} from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x:0, opacity:1, transition: {duration: 0.5, delay: delay}}
})
export default function Hero() {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="min-h-screen flex items-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-pink-300 to-transparent opacity-30"></div>
          <div className="absolute bottom-32 right-20 w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent opacity-40"></div>
  
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Text Content - Asymmetric Layout */}
              <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
                {/* Name with creative positioning */}
                <div className="relative">
                  <motion.div variants={container(0)} initial="hidden" animate="visible" className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:gap-4">
                      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-thin tracking-tight leading-none">Kidus M. Simegne</h1>
                    </div>
                  </motion.div>
  
                  {/* Decorative line */}
                  <div className="absolute -left-4 top-8 w-0.5 h-20 bg-gradient-to-b from-pink-300 via-slate-500 to-purple-500 opacity-60"></div>
                </div>
  
                {/* Title with offset positioning */}
                <motion.div variants={container(0.5)} initial="hidden" animate="visible" className="relative lg:ml-16">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-gradient-to-r from-pink-300 to-slate-500"></div>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl xl:text-4xl tracking-tight text-transparent font-light">
                      Electrical and Computer Engineer
                    </span>
                  </div>
                </motion.div>
  
                {/* Description with creative layout */}
                <motion.div variants={container(1)} initial="hidden" animate="visible" className="relative lg:ml-8">
                  <div className="max-w-xl">
                    <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-30"></div>
                    <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed font-light tracking-tight pl-8 border-l-2 border-transparent">
                      {HERO_CONTENT}
                    </p>
                  </div>
                </motion.div>
              </div>
  
              {/* Circular Image Section */}
              <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Outer rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96"
                  >
                    <div className="w-full h-full rounded-full border-2 border-dashed border-pink-300/30"></div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-pink-300 rounded-full"></div>
                    <div className="absolute bottom-8 right-12 w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="absolute top-16 right-6 w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  </motion.div>
  
                  {/* Main image container */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="relative w-80 h-80 lg:w-96 lg:h-96"
                  >
                    {/* Background glow effects */}
                    <div className="absolute inset-4 bg-gradient-to-br from-pink-300/20 via-slate-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute inset-6 bg-gradient-to-tl from-purple-500/15 via-slate-500/15 to-pink-300/15 rounded-full blur-xl"></div>
  
                    {/* Gradient border ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-slate-500 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full bg-neutral-900 p-2">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-300/10 via-slate-500/10 to-purple-500/10 p-1">
                          <img
                            src={Profile}
                            alt="Kidus Melaku"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
  
                    {/* Floating accent dots */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-300 to-purple-500 rounded-full opacity-80"
                    ></motion.div>
  
                    <motion.div
                      animate={{
                        y: [0, 15, 0],
                        x: [0, -8, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-slate-400 to-purple-400 rounded-full opacity-70"
                    ></motion.div>
  
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                        x: [0, 6, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 4,
                      }}
                      className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-pink-300 to-slate-500 rounded-full opacity-60"
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  