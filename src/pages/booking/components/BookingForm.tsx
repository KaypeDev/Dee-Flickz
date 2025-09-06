import { useState } from 'react';
import StepSelectDate from "./steps/StepSelectDate"
import StepClientFind from './steps/StepClientFind';
import StepBookingInfo from './steps/StepBookingInfo';
import StepFinish from './steps/StepFinish';
import type { BookingFormData } from '../types/BookingFormData';
import { useMutation, useConvex } from 'convex/react';
import { api } from "../../../../convex/_generated/api"
import { AnimatePresence, motion } from 'framer-motion';

const INITIAL_DATA: BookingFormData = {
    date: undefined,
    time: '',
    email: '',
    phone: '',
    name: '',
    eventLocation: '',
    message: '',
}

export default function BookingForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<BookingFormData>(INITIAL_DATA);

    const [isExistingClient, setIsExistingClient] = useState<boolean | null>(null);

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);



    const createClient = useMutation(api.clients.createClient)
    const createBooking = useMutation(api.bookings.createBookings)
    const convex = useConvex();

    const updateFormData = (newData: Partial<BookingFormData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    const checkClientExists = async (email: string, phone: string, setError: (msg: string) => void) => {
        try {
            const client = await convex.mutation(api.clients.getClientByEmailPhoneWithLimit, { email, phone });

            if (client) {
                setIsExistingClient(true);
                setError('');

                setFormData((prev) => ({
                    ...prev,
                    email: client.email,
                    phone: client.phone,
                    name: client.name ?? "",
                    clientId: client._id,
                }));
                nextStep();
            } else {
                setIsExistingClient(false);
                setError("Client not found. Please try again or continue as new.");
            }

        } catch (err: any) {
            console.error(err);


            const message = typeof err.message === "string"
                ? err.message.match(/Too many attempts\. Try again in \d+ minutes\./)?.[0]
                || "Something went wrong. Please try again."
                : "Something went wrong. Please try again.";

            setError(message);

        }


    };

    const handleNewClient = () => {
        setIsExistingClient(false);
        nextStep();
    };

    const handleSubmit = async () => {
        try {
            let clientId;

            if (!isExistingClient) {
                clientId = await createClient({
                    email: formData.email,
                    phone: formData.phone,
                    name: formData.name
                });
                console.log("Client created!")
            } else {
                clientId = formData.clientId!;
            }

            if (!formData.date || !formData.time) {
                throw new Error("Date and time are required")
            }

            const date = new Date(formData.date);
            const [hours, minutes] = formData.time.split(":").map(Number);
            date.setHours(hours, minutes, 0, 0);
            const scheduledAt = date.getTime();

            await createBooking({
                clientId,
                scheduledAt,
                eventLocation: formData.eventLocation,
                message: formData.message
            });

            console.log("Booking created ");
            nextStep();


        } catch (err) {
            console.error("Error creating booking", err);
        }

    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, }}
                transition={{ duration: 0.3 }}
            >
                {currentStep == 0 && (<StepSelectDate
                    data={formData}
                    updateData={updateFormData}
                    next={nextStep} />
                )}
                {currentStep == 1 && (
                    <StepClientFind
                        data={formData}
                        updateData={updateFormData}
                        checkClientExists={checkClientExists}
                        handleNewClient={handleNewClient}
                        prev={prevStep}
                    />
                )}
                {currentStep == 2 && (
                    <StepBookingInfo
                        data={formData}
                        updateData={updateFormData}
                        isExistingClient={isExistingClient}
                        next={handleSubmit}
                        prev={prevStep}
                    />
                )}



                {currentStep == 3 && (
                    <StepFinish
                        data={formData}
                    />)}
            </motion.div>
        </AnimatePresence>
    );
}

