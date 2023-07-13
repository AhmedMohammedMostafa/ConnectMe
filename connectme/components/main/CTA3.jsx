import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

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
              <h2 className="text-lg font-bold leading-8 tracking-tight text-primary">Code faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">AI Developer Tools</p>
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
