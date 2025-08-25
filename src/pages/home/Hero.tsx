import heroVideo from '../../assets/video/herovideo.mp4'
import HeroThumbnail from '../../assets/img/HeroThumbnail.png'
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <section className="w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster={HeroThumbnail}
        src={heroVideo}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex items-end text-center md:text-start md:justify-start h-full px-4 pb-60 xl:pb-40 2xl:pb-45">
        <div className='md:pl-25'>
          <motion.h1
            className="text-[40px] md:text-[50px] lg:text-[65px] xl:text-[75px] font-extrabold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Cinematographer
          </motion.h1>
          <motion.h1
            className="text-[40px] md:text-[50px] lg:text-[65px] xl:text-[75px] font-extrabold ml-7 md:ml-20 lg:ml-40 mb-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Based In LA
          </motion.h1>
          <motion.div
            className="h-[10px] md:h-[10px] lg:h-[15px] ml-0 md:ml-5 lg:ml-10 bg-white"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-130 bg-gradient-to-b from-transparent to-black z-5 pointer-events-none"
      />
    </section>
  );
}