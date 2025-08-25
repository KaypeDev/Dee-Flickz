import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { socialLinks } from "../config/socialLinks";
import { navLinks } from "../config/navLinks";

export default function Footer() {
    return (
        <footer className="h-85 md:h-100 lg:h-130 mt-20">
            <hr className="opacity-30" />
            <div className="max-w-[1440px] lg:mx-auto px-5 md:px-20 lg:px-25 flex flex-row pt-9 lg:pt-13">

                {/* Brand + Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    
                >
                    <h2 className="text-[35px] md:text-[50px] lg:text-[65px] font-extrabold mb-5 lg:mb-8">DEE.FLICKZ</h2>
                    <div className="ml-5  lg:ml-10 flex font-medium flex-col gap-5 lg:gap-7 text-[10px] md:text-[12px] lg:text-[15px]">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300"
                            >
                                {social.label}
                            </motion.a>
                        ))}
                    </div>


                </motion.div>

                {/* Navigation Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    
                    className="flex ml-auto"
                >
                    <div className="space-y-5 lg:space-y-8 flex flex-col pt-3 md:pt-8 items-end text-[25px] md:text-[35px] lg:text-[45px] font-semibold mr-20 md:mr-30 lg:mr-40">
                        {navLinks.map((link, index) => (
                            <motion.div
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.95 }}
                                key={index}>
                                <Link to={link.path} className="hover:text-gray-300">
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="flex text-[12px] md:text-[15px] justify-center mt-7 lg:mt-10">
                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.5, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    
                    href="#"
                    className="opacity-50"
                >
                    Back To Top
                </motion.a>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6}}
                
                className="border-t-1 border-[#2d2d2d] mt-1 lg:mt-2 pt-2 md:pt-4 text-center m-5 lg:m-15 text-[9px] md:text-[11px]  lg:text-[13px]"
            >
                &copy; {new Date().getFullYear()} DEE.FLICKZ. All rights reserved.
            </motion.div>
        </footer>
    );
}
