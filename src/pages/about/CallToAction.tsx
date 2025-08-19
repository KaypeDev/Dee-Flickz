import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <section className="flex justify-center items-center pt-15 lg:pt-50">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{ backgroundColor: '#273e47' }}
                className="w-90 h-85 lg:w-240 lg:h-125 text-[50px] flex flex-col items-center font-extrabold rounded-4xl p-5 gap-5">
                <div>
                    <h2
                        className="text-[30px] lg:text-[75px] text-center font-extrabold ">
                        Book With Me-Let's Make It Happen
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-40">
                    <div className="flex flex-col">
                        <h3
                            style={{ color: '#717070ff' }}
                            className="text-[12px] lg:text-[19px] font-medium">EMAIL</h3>
                        <p className="text-[15px] lg:text-[23px] font-semibold">Dee.Flickz@example.com</p>

                    </div>
                    <div className="flex flex-col">
                        <h3
                            style={{ color: '#717070ff' }}
                            className="text-[12px] lg:text-[19px] font-medium">LOCATED</h3>
                        <p className="text-[15px] lg:text-[23px] font-semibold">LOS ANGELES COUNTY, CA<br />ORANGE COUNTY, CA</p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0, transition:{ duration: 0.6, delay: 0.3 }}}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-start"
                >
                    <Link
                        to='/contact'
                        className='px-6 py-2 font-medium text-[15px] lg:text-[30px] rounded-4xl bg-white  text-[#273e47] hover:bg-[#618492ff] hover:text-white '
                    >CONTACT</Link>
                </motion.div>
            </motion.div>

        </section>
    );
}