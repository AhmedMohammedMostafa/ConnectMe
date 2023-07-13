
  
  import { motion } from 'framer-motion'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

  export default function Example() {
const [usersCount, setUsersCount] = useState(0);
const [knowledgeCount, setKnowledgeCount] = useState(0);
const [certificatesCount, setCertificatesCount] = useState(0);
const [aiRequestsCount, setAiRequestsCount] = useState(0);

    useEffect(() => {
    axios.get('/api/stats')
    .then(response => {
      const data = response.data;
      setUsersCount(data.usersCount);
      setKnowledgeCount(data.articleCount);
      setCertificatesCount(data.awardedCert);
      setAiRequestsCount(data.aiRequestsCount);

      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
  }, []);

    const stats = [
      { id: 1, name: 'Developers on ConnectMe', value: usersCount },
      { id: 2, name: 'Knowledge shared on ConnectMe', value: knowledgeCount },
      { id: 3, name: 'Certficates awarded', value: certificatesCount },
      { id: 4, name: 'AI Developer Tools Requests Used', value: aiRequestsCount },
    
    ]

    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <motion.h2  initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by developers worldwide</motion.h2>
              <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
               className="mt-4 text-lg leading-8 text-gray-300">
              Empowering Developers Across the Globe.
              </motion.p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.8, duration: 0.6 }}
              key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  