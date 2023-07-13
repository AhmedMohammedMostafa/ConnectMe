import {motion} from 'framer-motion'

export default function Example() {
  return (
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 lg:px-8">
        <motion.h2
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl font-bold tracking-tight text-white">
          Connect apps to your profile.
        </motion.h2>
        <div className="mt-8 flow-root lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img className="h-12" src="/brands/discord.svg" alt="Discord" />
            </motion.div>
            <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                            <img className="h-12" src="/brands/github.svg" alt="Github" />
            </motion.div>
            <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.7, duration: 1 }}
            className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">              <img
                className="h-12"
                src="/brands/gitlab-.svg"
                alt="gitlab"
              />
            </motion.div>
            <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.9, duration: 1 }}
            className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                            <img
                className="h-12"
                src="/brands/google.svg"
                alt="Google"
              />
            </motion.div>
            <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 1.1, duration: 1 }}
            className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                            <img
                className="h-12"
                src="/brands/linkedin.svg"
                alt="Linkedin"
              />
            </motion.div>
           
          </div>
        </div>
      </div>
  )
}
