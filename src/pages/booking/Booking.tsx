import BookingForm from "./components/BookingForm";
import Scheduling from "./Scheduling";
import { motion } from "framer-motion";

export default function Booking() {
    return (
        <div className="w-full max-w-[1440px] mx-auto">

            <div className="flex flex-col lg:flex-row items-center lg:justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
                    className="my-10 pb-10">
                    <Scheduling />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    viewport={{ once: true }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
                    className="bg-[#2d2d2d] mx-10 rounded-3xl w-90 lg:w-110 xl:w-135"
                >
                    <BookingForm />
                </motion.div>
            </div>
        </div>
    )
}
