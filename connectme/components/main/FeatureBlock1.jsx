import { FaPeopleGroup,FaRegNewspaper,FaCircleUser,FaCode } from "react-icons/fa6";

export default () => {

    const features = [
        {
            icon:
                <FaPeopleGroup />,
            title: "Community Collaboration",
            desc: "Collaborate with developers worldwide for innovative solutions."
        },
     
        {
            icon:
                <FaRegNewspaper />,
            title: "Knowledge Exchange",
            desc: "Learn and share insights with fellow developers."
        },
        {
            icon:
                <FaCircleUser />,
            title: "Profile Showcase",
            desc: "Showcase your skills and projects to the developer community."
        },
        {
            icon:
                <FaCode />,
            title: "Powerful Code Translator",
            desc: "Break language barriers with our advanced code translation."
        },
    ]

    return (
        <section className="relative py-28 bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-gray-300 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12">
                <h2 className="text-4xl font-semibold text-center mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] font-semibold
">ConnectMe Features </span></h2>
               
            </div>
          <div className="flex justify-center mt-12 lg:mt-0">
            
            <ul className="grid gap-8 sm:grid-cols-2">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-100 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
}