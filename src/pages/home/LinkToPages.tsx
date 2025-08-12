import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LinkToPages() {

    return (
        <section className="flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2}}
                viewport={{ once: true }}
                className='flex space-x-8 gap-1 lg:gap-25'>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to='/about' className="flex flex-col items-center" >
                        <h2 className="font-semibold text-[20px] lg:text-[25px] mb-1">ABOUT</h2>
                        <p className="font-regular text-[12px] lg:text-[16px] text-center">Learn more about me and<br />where I started</p>
                    </Link>
                </motion.div>
                <div className="w-0.5 h-18  md:h-25 bg-white"></div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to='/contact' className='flex flex-col items-center'>
                        <h2 className="font-semibold text-[20px] lg:text-[25px] mb-1">CONTACT</h2>
                        <p className="font-regular text-[12px] lg:text-[17px] text-center">Request a booking and<br />we'll talk about it</p>
                    </Link>
                </motion.div>
            </motion.div>
        </section >
    );
}