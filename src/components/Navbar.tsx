import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../config/navLinks";
import { socialLinks } from "../config/socialLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    {/* Scroll Disabled */ }
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <nav className='fixed top-0 left-0 w-full z-50 py-6'>
            <div className='max-w-[1440px] mx-auto px-6 md:px-20 flex justify-between items-center'>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                    whileHover={{ scale: 1.05 }}

                >
                    <Link to="/" className="text-[25px] mr-12 md:text-[25px] lg:text-[30px] font-black">DEE.FLICKZ</Link>
                </motion.div>
                <motion.button
                    onClick={() => setIsOpen(true)}
                    className='text-[40px] md:text-[40px] lg:text-[50px] font-black'
                    aria-label="Open Menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
                    whileHover={{ scale: 1.15 }}
                >
                    ☰
                </motion.button>

            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }}
                        className="fixed inset-0 bg-black text-white z-50 flex flex-col overflow-hidden"
                    >
                        {/* Top bar: logo + close button */}
                        <div className="max-w-[1440px] w-full mx-auto flex flex-col">
                            <div className="flex justify-between items-center  mt-7 px-18">
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Link to="/" onClick={() => setIsOpen(false)}
                                        className="text-[30px] md:text-[50px] font-black">
                                        DEE.FLICKZ
                                    </Link>
                                </motion.div>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="text-[30px] md:text-[50px] font-black"
                                    aria-label="Close Menu"
                                    whileHover={{ scale: 1.4 }}
                                >
                                    X
                                </motion.button>
                            </div>
                        </div>

                        {/* Links section */}
                        <div className="h-screen flex flex-col items-center justify-center px-4">
                            {/* Nav Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                                className="flex flex-col items-start gap-5 font-extrabold text-[40px] md:text-[60px] md:ml-90 md:mb-10"
                            >
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 20 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <Link to={link.path} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0, duration: 0.4 }}
                                className="mt-10 flex justify-center gap-5 md:gap-40 "
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex mt-10 items-center gap-2 text-white font-semibold text-[13px] md:text-[18px]"
                                        whileHover={{ scale: 1.08 }}
                                    >
                                        {social.label}

                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                )}
            </AnimatePresence>

        </nav>
    );

}