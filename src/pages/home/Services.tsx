import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation } from "swiper/modules";
import { slides } from '../../config/serviceSlide'


export default function Services() {

    return (
        <section className="flex-col items-center justify-center overflow-x-hidden">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex-col text-start ml-5 mb-5">
                <h2 className='text-[27px] md:text-[45px] font-extrabold'>My Skills And Experiences</h2>
                <p
                    style={{ color: '#969696ff' }}
                    className='text-[12px] md:text-[16px] font-regular w-95 md:w-135'>
                    I create cinematic visuals across events, sports, and branded content - always balancing creative direction with technical skills
                </p>
            </motion.div>

            <Swiper
                modules={[Navigation]}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 1.5
                    },
                    450: {
                        slidesPerView: 1.8
                    },
                    500: {
                        slidesPerView: 2.5
                    },
                    774: {
                        slidesPerView: 3
                    },
                    950: {
                        slidesPerView: 3.5    
                    },
                    1024: {
                        slidesPerView: 2.8  
                    }, 
                    1228: {
                        slidesPerView: 3.5
                    }
                    
                }}
                loop={false}
                allowTouchMove={true}
            >
                {slides.map(({ title, description, img }, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start gap-6 p-6 rounded-lg bg-transparent">
                            <div className="w-[250px] h-[330px]  lg:w-[350px] lg:h-[480px] overflow-hidden rounded-xl shadow-md">
                                <img
                                    src={img}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <h2 className="text-[23px] lg:text-[30px] font-bold mb-1">{title}</h2>
                                <p
                                    style={{ color: '#969696ff' }}
                                    className="text-[12px] lg:text-[16px] font-regular whitespace-pre-line">
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
}