import { useState, useEffect } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { useRouter } from "next/router";


export default () => {
    const router = useRouter();

const [email,setEmail ] = useState("");
    const [state, setState] = useState(false)
let userCount = 20;
    // Replace javascript:void(0) paths with your paths



const handleGetStartedSumbit = (e) => {
    e.preventDefault();
    console.log(formatEmailForURL(email));
router.push(`/auth/signup?email=${formatEmailForURL(email)}`);

}


const handleGetStartedChange = (e) => {
setEmail(e.target.value);

}
    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


   
    return (
        <>
<div
      
      className="bg-gray-900"
    >            <section className="relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Build, Share, Connect</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-400">
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] font-semibold
">ConnectMe : </span> Unite, code, collaborate. Join our developer community for collaboration, code sharing, and networking. Break language barriers, showcase skills, and elevate your coding journey. Connect, grow with ConnectMe.
                        </p>
                        <form 
                            onSubmit={handleGetStartedSumbit}
                            className="justify-center items-center gap-x-3 sm:flex">
                            <input
                            onChange={handleGetStartedChange}
                                type="email"
                                value={email}
                                placeholder="Enter your email"
                                className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                            />
                            <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
        <div className="flex items-center gap-x-1">
            <FaUserLarge className="text-gray-100" />

                            <p><span className="text-gray-100">Used</span> by over {userCount} users</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}



function formatEmailForURL(email) {
    const formattedEmail = encodeURIComponent(email);
    return formattedEmail;
  }