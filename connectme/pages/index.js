import Hero from '@/components/home/Hero'
import CTA1 from '@/components/main/CTA1'
import TrustedBlock from '@/components/main/TrustedBlock'
import Pricing from '@/components/main/Pricing'
import Stats from '@/components/main/Stats'
import Contact from '@/components/main/Contact'
import Features from '@/components/main/Features'
import CTA2 from '@/components/main/CTA2'
import CTA3 from '@/components/main/CTA3'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/main/Newsletter'

export default function Home() {
  return (
   <>
   <Hero  />
   <TrustedBlock />
   <Features />
   <CTA1 />
<CTA2 />
   <Stats />
<Pricing />
<Contact />
<Newsletter />
<Footer />
<ToastContainer
position="bottom-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

   </>
  )
}
