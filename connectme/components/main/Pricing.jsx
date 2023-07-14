import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  
  {
    name: 'Plus',
    id: 'tier-Plus',
    href: '#',
    delay: 1,
    price: { monthly: '$15', annually: '$120' },
    description: 'Showcase your work with 100 projects, 100 posts, and 100 code snippets. Collaborate in 10 teams and unlock AI Developer Tools.',
    features: [
      '100 Projects',
      '100 Knowledge Sharing Posts',
      '100 Code Snippets',
      'Be a part of 10 Teams',
      '1000 requests/day AI Developer Tools',
      'Plus Badge on Profile',
      '24-hour support response time',
      'Access to ConnectMe Beta Features',

    ],
    mostPopular: true,
  },
  {
    name: 'Premium',
    id: 'tier-Premium',
    href: '#',
    delay: 1.2,
    price: { monthly: '$49', annually: '$350' },
    description: 'Unlimited projects, posts, and code snippets. Connect with 50 teams and enjoy advanced AI Developer Tools and access to a private Discord server.',
    features: [
      'Unlimted Projects',
  'Unlimted Knowledge Sharing Posts',
  'Unlimted Code Snippets',
  'Be a part of 50 Teams',
  '5000 requests/day AI Developer Tools',
  'Premium Badge on Profile',
  '12-hour support response time',
  'Access to ConnectMe Beta Features',
  'Access to ConnectMe Private Discord Server',
    ],
    mostPopular: false,
  },
]

const free = [
  '25 Projects',
  '15 Knowledge Sharing Posts',
  '10 Code Snippets',
  'Be a part of 2 Teams',
  '100 requests/day AI Developer Tools',
'48-hour support response time',
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base font-semibold leading-7 text-indigo-400">Pricing</motion.h2>
          <motion.p  initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for&nbsp;all&nbsp;developers.
          </motion.p>
        </div>
        <motion.p initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
               className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose an affordable plan that’s packed with the best features for engaging with the developer community.
        </motion.p>
        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1, y: -30 }}
         transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </motion.div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1, y: -30 }}
         transition={{ delay: 0.8, duration: 0.6 }}
animate={{ y: 0 }}
              key={
          'Starter'
              }
              className={classNames(
               'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={'tier-Starter'} className="text-lg font-semibold leading-8 text-white">
                  Starter
                </h3>
               
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">Build your profile with 25 projects, 15 posts, and 10 code snippets. Join 2 teams and enjoy AI Developer Tools.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">Free</span>
              </p>
              <Link
                href={"#"}
                aria-describedby={'tier-Starter'}
                className={classNames(
                 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Get Started
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {free.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          {tiers.map((tier) => (
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{ delay: tier.delay, duration: 0.3 }}
   animate={{ y: 0 }}

              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
