import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CollabAndCTA() {
    return (
        <section className="flex flex-col items-center justify-between gap-50 lg:gap-50">

            <div className="flex gap-15 flex-col">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-[35px] lg:text-[60px] text-center font-extrabold">
                    PARTNERS & CLIENTS
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: .8 }}
                    viewport={{ once: true }}
                    className='flex flex-col md:grid gap-15 text-center  md:grid-cols-2'>
                    <motion.a
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://neauxdoubt.com/?fbclid=PAZXh0bgNhZW0CMTEAAafy31_x3-_lezd6QOiypNqeTJ4kH0RqUQFcBlTXQNHFY3vpV2UMZWEIG_pSCg_aem_IqyHgxFuPc6RGg758BkFGw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-[23px] lg:text-[30px] font-bold opacity-45'>
                        NEAUX DOUBT ↗
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://ryokorain.com/?fbclid=PAZXh0bgNhZW0CMTEAAac8bShZExGjl_CgzhqDuIpOFZ_gCoLHxt3Qlw7YuMlpGtL0wotRUqBMUrgfSw_aem_3rXDzNf0IupT9CrvMfwvvQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-[23px] lg:text-[30px] font-bold opacity-45'>
                        RYOKO RAIN ↗
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://heritageinmotion.com/?fbclid=PAZXh0bgNhZW0CMTEAAacSVWtYbe8iVvFEsvqY1wE_qMkeRwNF8GlsQqffDA3D72e9JT9tnuPZj2r5Kw_aem_MJV6lnMIFW-cQ8isj7NwbA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[23px] lg:text-[30px] font-bold opacity-45 col-span-2 justify-self-center">
                        HERITAGE MOTION ↗
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://www.instagram.com/unknwn.opisyal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-[23px] lg:text-[30px] font-bold opacity-45'>
                        UNKNOWN ↗
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://www.instagram.com/_valcitee_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-[23px] lg:text-[30px] font-bold opacity-45'>
                        VALCITEE ↗
                    </motion.a>
                </motion.div>
            </div>

            <div className='w-80 lg:w-170 flex flex-col items-center md:items-start gap-8 lg:gap-20'>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='italic text-[20px] lg:text-[40px] text-left leading-tight'>
                    "Whenever you're ready,<br />I'm here
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition:{ duration: 0.9, delay: 0.4 }}}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="ml-auto mr-20"
                >
                    <Link
                        to='/contact'
                        className='px-6 py-2 font-light text-[15px] lg:text-[30px] rounded-2xl bg-white  text-black hover:bg-gray-600 hover:text-white '
                    >CONTACT</Link>
                </motion.div>
            </div>
        </section>
    );
}