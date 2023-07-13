import { ChartBarIcon,CogIcon,LanguageIcon, LockClosedIcon, ExclamationCircleIcon, ScaleIcon, SparklesIcon,ChatBubbleBottomCenterIcon,BoltIcon} from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Code translation',
    description:
      'Translate your code into multiple languages with ease. Break language barriers and expand your reach to a global audience.',
    icon: LanguageIcon,
  },

  {
    name: 'Code encryption',
    description: 'Protect your code from unauthorized access and theft. Safeguard your intellectual property and sensitive algorithms.',
    icon: LockClosedIcon,
  },
  {
    name: 'AI comments for your code',
    description: 'Get intelligent comments and suggestions for your code. Enhance documentation and understand your code better.',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Code suggestion',
    description: 'Receive intelligent code suggestions based on context. Speed up coding process and reduce errors with AI-powered recommendations.',
    icon: BoltIcon,
  },
  {
    name: 'Code refactoring',
    description: 'Automatically improve code structure and readability. Optimize code efficiency and maintainability with AI-assisted refactoring.',
    icon: CogIcon,
  },
  {
    name: 'Code performance optimization',
    description: 'Analyze and optimize code performance. Identify bottlenecks and receive AI-driven recommendations to enhance application speed.',
    icon: ChartBarIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-y-16 gap-x-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, x: -75 }}
  transition={{ delay: 0.2, duration: 1 }}
  animate={{ x: -200 }}
  className="lg:pr-8 lg:pt-4"
>  
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-bold leading-8 tracking-tight text-primary">Code Faster</h2>
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
