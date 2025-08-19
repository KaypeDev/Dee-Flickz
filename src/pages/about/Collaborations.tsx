
import { collabSlide } from "../../config/collabSlide";
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';


export default function Collaborations() {
    return (
        <section className="flex flex-col items-center">

            <div className="mb-7 lg:mb-15">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                    className="text-[35px] lg:text-[50px] font-extrabold text-center w-80 lg:w-250"
                >
                    THE COLLABORATIONS THAT CLICKED
                </motion.h2>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}
                loop={false}
                allowTouchMove={true}
                className="max-w w-full relative"
            >
                {collabSlide.map(({ title, description, video, year }, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center gap-3 lg:gap-5"
                            >
                            <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            >     
                            <video
                                src={video}
                                title={`Video for ${title}`}
                                aria-label={`Video post titled ${title}`}
                                muted
                                autoPlay
                                playsInline
                                loop
                                preload="metadata"
                                className="w-90 h-80 lg:w-170 lg:h-140 rounded-3xl object-cover"
                            />
                            </motion.div>
                            <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                           
                            className="mr-7 flex flex-col gap-2 lg:gap-5 lg:pt-10">
                                <div className="flex flex-row gap-5">
                                    <h3 className="text-left text-[16px] lg:text-[23px] font-semibold">
                                        {title}
                                    </h3>
                                    <time
                                        dateTime={year}
                                        className="text-[16px] lg:text-[23px] font-extralight opacity-70">
                                        {year}
                                    </time>
                                </div>
                                <p
                                    style={{ color: '#969696ff' }}
                                    className="w-80 text-left text-[12px] lg:text-[17px] lg:w-70 font-medium"
                                >
                                    {description}
                                </p>
                            </motion.div>
                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>

            <div>

            </div>

        </section>
    );
}