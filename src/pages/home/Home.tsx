import Hero from "./Hero"
import LinkToPages from "./LinkToPages"
import Services from "./Services"
import Vision from "./Vision"
import Gallery from "./Gallery"
import CollabAndCTA from "./CollabAndCTA"

export default function Home() {
    return (
        <div className="w-full max-w-[1440px] mx-auto bg-black">
            <Hero />
            
            <div className="md:my-5 lg:my-15">
                <LinkToPages />
            </div>
            
            <div className="my-20 md:my-35">
                <Services />
            </div>

            <div className="my-20 md:my-50">
                <Vision/>
            </div>
            
            <div className="my-20 md:my-65">
                <Gallery/>
            </div>

            <div className="my-20 md:my-65">
                <CollabAndCTA/>
            </div>
        </div>
    )
}