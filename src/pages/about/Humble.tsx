import { motion } from "framer-motion";
import content from '../../assets/img/content.png'

export default function Humble() {
    return (
        <section className="w-screen">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col">
                <div className="flex justify-end mr-10 md:justify-center pt-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        viewport={{ once: true }}
                        className="text-[40px] lg:text-[50px] text-end font-extrabold lg:mr-100">
                        HUMBLE<br />BEGINNINGS
                    </motion.h2>
                </div>

                <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-25" >
                    <motion.img
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ once: true }}
                        src={content}
                        alt='Richard'
                        className="w-85 h-85 lg:w-120 lg:h-120  object-cover rounded-full mt-20"
                    />
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h2
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            viewport={{ once: true }}
                            className="text-[25px] font-bold mb-5 lg:mb-15 lg:mt-10">
                            THE FIRST REEL

                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            viewport={{ once: true }}
                            style={{ color: '#969696ff' }}
                            className="text-[12px] lg:text-[17px] text-center w-80 font-medium lg:text-left lg:ml-15 lg:w-65">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text.


                        </motion.p>
                    </div>

                </div>
            </div>
        </section>
    );

}
