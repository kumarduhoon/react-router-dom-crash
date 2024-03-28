import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-gray-800">
            <div className=" mx-auto max-w-8xl sm:px-3 lg:px-1">
                <nav className="relative flex items-center justify-between h-16 bg-gray-800 lg:rounded-md lg:shadow-lg lg:h-16 lg:px-8 lg:py-6">
                    <div className="flex-shrink-0">
                        <Link to="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                        </Link>
                    </div>
                    <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </Link>

                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </Link>

                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </Link>

                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </Link>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:space-x-10">
                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign up </Link>

                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign in </Link>
                    </div>
                </nav>
                <nav className="flex flex-col py-4 space-y-2 lg:hidden">
                    <Link to="#" title="" className="py-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"> Features </Link>

                    <Link to="#" title="" className="py-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"> Solutions </Link>

                    <Link to="#" title="" className="py-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"> Resources </Link>

                    <Link to="#" title="" className="py-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"> Pricing </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header