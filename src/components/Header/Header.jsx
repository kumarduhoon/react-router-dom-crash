import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-gray-800">
            <div className=" mx-auto max-w-8xl sm:px-3 lg:px-1">
                <nav className="relative flex items-center justify-between h-16 bg-gray-800 lg:rounded-md lg:shadow-lg lg:h-16 lg:px-8 lg:py-6">
                    <div className="flex-shrink-0">
                        <NavLink to="/" title="logo" className="flex">
                            <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                        </NavLink>
                    </div>
                    <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                        <NavLink to="/" title="Home" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </NavLink>

                        <NavLink to="/about" title="About" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </NavLink>

                        <NavLink to="/blog" title="Blog" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Blog </NavLink>

                        <NavLink to="/contact" title="Contact" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </NavLink>
                        <NavLink to="/services" title="Services" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Services </NavLink>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:space-x-10">
                        <NavLink to="/sign-up" title="Sign up" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign up </NavLink>

                        <NavLink to="/sign-in" title="Sign in" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign in </NavLink>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header