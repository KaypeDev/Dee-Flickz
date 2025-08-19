import { motion } from "framer-motion";

export default function Quote() {
    return (
        <section className='w-screen pb-35 mt-40 lg:mt-70 '>
            <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center gap-8">
                <h2 className="text-[35px] w-65 lg:text-[45px] lg:w-full font-extrabold text-center">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }}>QUALITY. </motion.span>
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ delay: 0.5, duration: 0.5 }} viewport={{ once: true }}>ORIGINALITY. </motion.span>
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ delay: 0.8, duration: 0.5 }} viewport={{ once: true }}>WORK ETHIC.</motion.span>
                </h2>
                <motion.p
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1}} 
                    transition={{ delay: 0.6, duration: 1.2 }}
                    viewport={{ once: true }}
                    style={{ color: '#969696ff' }}
                    className='text-[15px] w-80 lg:text-[20px] lg:w-200 font-medium text-center'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                </motion.p>

            </div>
        </section>
    );
}