import CallToAction from "./CallToAction"
import Collaborations from "./Collaborations"
import Humble from "./Humble"
import Quote from "./Quote"
import Richard from "./Richard"

export default function About() {
    return (
        <div>
            <div className="w-full max-w-[1440px] mx-auto my-10 lg:my-20">
                <Richard />
            </div>

            <div
                style={{ backgroundColor: '#2c2c2cff' }}>
                <Humble />
                <Quote />
            </div>

            <div className="w-full max-w-[1440px] mx-auto">
                <div className="my-25">
                    <Collaborations />
                </div>
                <div className="my-25">
                    <CallToAction />
                </div>
            </div>


        </div>
    )
}