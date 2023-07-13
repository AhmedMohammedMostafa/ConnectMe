import { CommandLineIcon, LightBulbIcon, AcademicCapIcon,ShieldCheckIcon,PresentationChartBarIcon,UserGroupIcon,CodeBracketIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"

const features = [
  {
  name: 'Project Showcase',
  description: 'Showcase your projects and highlight your skills to the ConnectMe community.',
  icon: CommandLineIcon,
  },
  {
  name: 'Knowledge Hub',
  description: 'Share your knowledge and insights with the ConnectMe community through articles.',
  icon: LightBulbIcon,
  },
  {
  name: 'Skills Showcase',
  description: 'Display your skills and expertise on your ConnectMe profile for others to discover.',
  icon: AcademicCapIcon,
  },
  {
  name: 'Certification',
  description: 'Get certified by ConnectMe to validate your skills and enhance your professional profile.',
  icon: ShieldCheckIcon,
  },
  {
  name: 'Collaboration',
  description: 'Find collaborators for your projects and join forces with talented individuals.',
  icon: PresentationChartBarIcon,
  },
  {
  name: 'Teams',
  description: 'Join teams and collaborate on innovative projects with like-minded professionals.',
  icon: UserGroupIcon,
  },
  {
  name: 'Code Snippets',
  description: 'Share and discover code snippets to facilitate learning and development.',
  icon: CodeBracketIcon,
  },
  ];


export default function Example() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, x: -75 }}
  transition={{ delay: 0.2, duration: 1 }}
  animate={{ x: -200 }}
  className="lg:pr-8 lg:pt-4"
>  
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-bold leading-8 tracking-tight text-primary">No Portfolio? No Problem.</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">ConnectMe Profiles</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-info">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline font-light">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[67rem] max-w-none rounded-2xl shadow-2xl ring-2 ring-white/12 sm:w-[87rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
            initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 1 }}
  animate={{ x: 300 }}
          />
         
        </div>
      </div>
    </div>
  )
}
