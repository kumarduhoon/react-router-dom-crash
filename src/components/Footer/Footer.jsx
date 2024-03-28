import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <>
            <footer className="bg-gray-800 shadow my-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center dark:text-gray-400 font-medium">© 2023 <Link to="https://flowbite.com/" className="hover:underline font-medium">Flowbite™</Link>. All Rights Reserved.
                    </span>
                    <div className="hidden ml-10 lg:flex lg:items-center  lg:space-x-10">
                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </Link>
                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </Link>
                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </Link>
                        <Link to="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </Link>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;