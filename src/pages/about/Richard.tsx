import { motion } from "framer-motion"
import HeroVideo from '../../assets/video/herovideo.mp4'
export default function Richard() {
    return (
        <section className="relative flex flex-col lg:flex-row items-center mt-10">
            <div className="flex flex-col relative lg:translate-x-40 z-10">
                <motion.h1
                    layout
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-[45px] w-90 lg:text-[75px] lg:w-150 text-center  font-extrabold mb-10">
                    A LOOK BEHIND THE LENS
                </motion.h1>
                <div className="text-center w-65">
                    <motion.h2
                        layout
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-[20px] lg:text-[25px] font-bold">
                        RICHARD FALCIS
                    </motion.h2>
                    <motion.p
                        layout
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        style={{ color: '#969696ff' }}
                        className="text-[12px] lg:text-[15px] font-regular mt-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </motion.p>
                </div>
            </div>

            <motion.div
                layout
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}

                className="relative items-center z-0 mt-10 lg:mt-0">
                <video
                    src={HeroVideo}
                    controls={false}
                    playsInline
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    className="w-[365px] h-[335px] md:w-[480px] md:h-[390px] lg:w-[750px] lg:h-[500px] lg:-translate-x-35 object-cover rounded-3xl"
                />
            </motion.div>

        </section>

    );

}