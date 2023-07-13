import {
    BookOpenIcon,
    CodeBracketSquareIcon,
    UserGroupIcon,
    BriefcaseIcon,
    WrenchScrewdriverIcon,
    ServerIcon,
    GlobeAltIcon
  } from '@heroicons/react/20/solid'
  import { motion } from "framer-motion"
  
  const features = [
    {
      name: 'Grow your network.',
      description: 'Grow your network and expand your opportunities by connecting with like-minded professionals on ConnectMe – the platform for meaningful connections.',
      icon: GlobeAltIcon,
      delay: 0.2,
    },
    {
      name: 'Showcase your projects.',
      description: 'Showcase your projects and share your creativity with a global audience through ConnectMe - the platform for creative expression.',
      icon: CodeBracketSquareIcon,
      delay: 0.4,
    },
    {
      name: 'AI Developer Tools.',
      description: 'Elevate your coding experience with ConnectMe\'s advanced tools for code translation and error checking. Simplify your development process and enhance code quality.',
      icon: WrenchScrewdriverIcon,
      delay: 0.6,
    },
    {
      name: 'Share and gain knowledge.',
      description: 'Share your expertise and gain valuable knowledge on ConnectMe - the platform for knowledge sharing. Connect with industry professionals, participate in discussions, and stay up-to-date with the latest trends and insights.',
      icon: BookOpenIcon,
      delay: 0.8,
    },
    {
      name: 'Find a job.',
      description: 'Discover exciting job opportunities tailored to your skills and interests on ConnectMe\'s job portal. Explore a wide range of job listings, connect with hiring managers, and take the next step in your career.',
      icon: BriefcaseIcon,
      delay: 1,
    },
    {
      name: 'Join teams.',
      description: 'Collaborate and join dynamic teams on ConnectMe. Whether you\'re looking for a project partner or want to contribute your skills to a specific team, our platform provides a seamless way to connect and collaborate with like-minded professionals.',
      icon: UserGroupIcon,
      delay: 1.2,
    },
  ]
  
  export default function Example() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <motion.h2  
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary"
              >Everything you need</motion.h2>
            <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No project? No problem.</motion.p>
            <motion.p  initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="mt-6 text-lg leading-8 text-gray-300">
            Discover other developers seeking collaborators or team members. ConnectMe - The platform for connecting developers, showcasing projects, and fostering collaboration.
            </motion.p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.img

initial={{ opacity: 0 }}
whileInView={{ opacity: 1, y: -20 }}
animate={{ y: 0 }}
transition={{ delay: 0.3, duration: 0.7 }}

              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              
               key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  