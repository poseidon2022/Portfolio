import {CONTACT} from "../Constants/Constants"
import {motion} from "framer-motion"
export default function Contact() {
    return (
      <div className="border-b border-neutral-900 pb-20 relative overflow-hidden">
        <div className="absolute top-16 left-8 w-1 h-32 bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-20"></div>
        <div className="absolute bottom-16 right-10 w-0.5 h-24 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-neutral-600 to-transparent opacity-25"></div>
  
        <div className="container mx-auto px-6">
          <div className="relative my-10">
            <div className="flex items-center justify-center relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-32 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent"></div>
  
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-5xl lg:text-6xl font-thin tracking-tight relative"
              >
                <span className="relative">
                  Get in Touch
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-60"></div>
                </span>
              </motion.h1>
  
              <div className="absolute -left-8 top-1/2 w-2 h-2 bg-neutral-600 rounded-full opacity-40"></div>
              <div className="absolute -right-8 top-1/2 w-2 h-2 bg-neutral-600 rounded-full opacity-40"></div>
            </div>
          </div>
  
          <div className="text-center tracking-tighter">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              {CONTACT.address}
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              {CONTACT.phoneNo}
            </motion.p>
            <a href={`mailto:${CONTACT.email}`} className="underline">
              {CONTACT.email}
            </a>
          </div>
  
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
            className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-br from-neutral-500 to-neutral-700 rounded-lg opacity-40"
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
            className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full opacity-50"
          ></motion.div>
        </div>
      </div>
    )
  }