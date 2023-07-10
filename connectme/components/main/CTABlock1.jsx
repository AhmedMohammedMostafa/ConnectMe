import Image from 'next/image'
import Link from 'next/link'


    
export default ({ imageSrc, header,title, description,goToLink,goToLinkTitle}) => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img 
                        src={imageSrc} 
                        className="md:max-w-lg sm:rounded-lg"
                         alt="Image ALT"
                            width={500}
                            height={500}
                          />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-info font-semibold">
                            {header}
                        </h3>
                        <p className="text-gray-300 text-3xl font-semibold sm:text-4xl">
                            {title}
                        </p>
                        <p className="mt-3 text-gray-200">
                            {description}
                        </p>
                        <Link href={goToLink} className="inline-flex gap-x-1 items-center text-info hover:text-indigo-500 duration-150 font-medium">
                            {goToLinkTitle}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}