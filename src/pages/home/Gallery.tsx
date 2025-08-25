import { gallery } from "../../config/galleryLink";
import { motion } from "framer-motion";

export default function Gallery() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
            {gallery.map(({ title, date, src, link, poster }, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    key={index}
                    className="overflow-hidden">
                    <div className='flex justify-between'>
                        <h2 className="text-[10px] md:text-[15px] font-semibold">{title}</h2>
                        <time dateTime={date} className="text-[8px] md:text-[10px] font-extralight opacity-70">{date}</time>
                    </div>

                    <div className="relative w-full h-full">
                        <video
                            src={src}
                            title={`Video for ${title}`}
                            aria-label={`Video post titled ${title}`}
                            poster={poster}
                            muted
                            playsInline
                            loop
                            preload="metadata"
                            className="w-full h-70 md:h-100 object-cover"
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                            }}
                        />

                        {link && (
                            <a
                                href={link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className="absolute bottom-10 right-4 bg-white/80 hover:bg-black text-black hover:text-white text-xs md:text-sm px-3 py-1 rounded transition-colors font-semibold"
                            >
                                INSTAGRAM
                            </a>
                        )}
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
