import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";

export default function Vision() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <section className="flex flex-col items-center gap-10 md:flex-row justify-center lg:gap-40">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2 }}
                className="text-[35px] lg:text-[45px] xl:text-[50px] text-center w-85 xl:w-120 font-extrabold"
            >
                {inView && (
                    <Typewriter
                        words={['YOU BRING THE VISION, I\'LL BRING THE LENS']}
                        typeSpeed={30}
                        cursor
                        cursorStyle="|"
                    />
                )}
            </motion.div>

            <div>
                <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                viewport={{ once: true }}
                style={{ color: '#b6b6b6ff' }}
                className="text-[17px] lg:text-[21px] xl:text-[25px] text-center font-medium w-85 xl:w-120">
                    I specialize in capturing clean, high-quality visuals for brands, events, and creators.
                    Whether it’s a fashion drop, a sports moment, or a behind-the-scenes 
                </motion.p>
                
                 <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.7 }}
                viewport={{ once: true }}
                style={{ color: '#b6b6b6ff' }}
                className="text-[17px] lg:text-[21px] xl:text-[25px] text-center font-medium w-85 xl:w-120">
                    reel, my focus is on
                    telling your story in a way that feels real, intentional, and visually strong. Every frame
                    is crafted to connect with your audience — quickly and meaningfully. 
                </motion.p>
            </div>
        </section>
    );
};