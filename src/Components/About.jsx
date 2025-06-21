import Computer from "../asset/Computer.jpg"
import { ABOUT_TEXT } from "../Constants/Constants"
import { motion } from "framer-motion"
export default function About() {
    return (
      <div className="border-b border-neutral-900 pb-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-32 right-10 w-1 h-40 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-20"></div>
        <div className="absolute bottom-20 left-16 w-0.5 h-28 bg-gradient-to-b from-transparent via-neutral-500 to-transparent opacity-30"></div>
  
        <div className="container mx-auto px-6">
          {/* Creative Title Section */}
          <div className="relative my-20">
            <div className="flex items-center justify-center relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-24 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent"></div>
  
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl lg:text-6xl font-thin tracking-tight relative"
              >
                <span className="relative">
                  About
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-500 ml-4 relative"
                  >
                    Me
                    <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-neutral-500 to-transparent opacity-50"></div>
                  </motion.span>
                </span>
              </motion.h2>
            </div>
          </div>
  
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Section with Creative Layout */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 relative order-2 lg:order-1"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Background decorative shapes */}
                <div className="absolute -inset-4 bg-gradient-to-br from-neutral-800/30 via-neutral-700/20 to-neutral-600/30 rounded-3xl blur-xl transform rotate-3"></div>
                <div className="absolute -inset-2 bg-gradient-to-tl from-neutral-700/20 via-neutral-600/20 to-neutral-800/20 rounded-2xl blur-lg transform -rotate-2"></div>
  
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm rounded-3xl p-3 border border-neutral-700/50">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      src={Computer}
                      alt="Computer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent"></div>
                  </div>
                </div>
  
                {/* Floating accent elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-lg opacity-60"
                ></motion.div>
  
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-neutral-500 to-neutral-700 rounded-full opacity-50"
                ></motion.div>
              </div>
            </motion.div>
  
            {/* Text Content with Stylish Layout */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 order-1 lg:order-2 relative"
            >
              <div className="space-y-8">
                {/* Decorative quote mark */}
                <div className="relative">
                  <div className="absolute -left-6 -top-2 text-6xl text-neutral-700 font-serif opacity-30">"</div>
  
                  {/* Text content with creative styling */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-neutral-600 via-neutral-500 to-neutral-600 opacity-40 rounded-full"></div>
  
                    <div className="space-y-6">
                      <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed font-light tracking-wide max-w-2xl">
                        {ABOUT_TEXT}
                      </p>
                    </div>
                  </div>
  
                  {/* Closing quote mark */}
                  <div className="flex justify-end mt-4">
                    <div className="text-4xl text-neutral-700 font-serif opacity-30">"</div>
                  </div>
                </div>
  
                {/* Additional decorative elements */}
                <div className="flex items-center gap-4 pt-4 opacity-60">
                  <div className="w-8 h-px bg-gradient-to-r from-neutral-600 to-transparent"></div>
                  <div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
                  <div className="w-12 h-px bg-gradient-to-r from-neutral-600 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }