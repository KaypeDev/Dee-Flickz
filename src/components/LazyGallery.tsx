import { useEffect, useState, useRef } from "react";

interface LazyGalleryProps {
  src: string;
  poster?: string;
  title?: string;
}

export default function LazyGallery({ src, poster, title }: LazyGalleryProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (videoRef.current) observer.observe(videoRef.current)
    }, []);

    return (
        <video
            ref={videoRef}
            src={isVisible ? src : undefined}
            poster={poster}
            muted
            playsInline
            loop
            preload="metadata"
            className="w-full h-70 md:h-100 object-cover"
            title={`Video for ${title}`}
            aria-label={`Video post titled ${title}`}
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
                e.currentTarget.pause();
            }}
        />

    );

}