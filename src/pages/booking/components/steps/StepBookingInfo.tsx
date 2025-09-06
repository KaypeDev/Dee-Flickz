import { useState } from 'react';
import z from 'zod';
import type { BookingFormData } from '../../types/BookingFormData';
import { isValidPhoneNumber, parsePhoneNumberFromString } from 'libphonenumber-js';
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'


const bookingInfoSchemaNewClient = z.object({
    email: z.string().email({ message: "Enter a valid email." }),
    phone: z
        .string()
        .refine((val) => isValidPhoneNumber(val || ''), {
            message: "Enter a valid phone number.",
        }),
    name: z.string().min(1, { message: "Name is required." }),
    eventLocation: z.string().min(1, { message: "Event location is required." }),
    message: z.string().optional(),
})

const bookingInfoSchemaExistingClient = z.object({
    eventLocation: z.string().min(1, { message: "Event location is required." }),
    message: z.string().optional(),
})

type StepBookingInfoProps = {
    data: BookingFormData;
    updateData: (newData: Partial<BookingFormData>) => void;
    isExistingClient: boolean | null;
    next: () => void;
    prev: () => void;
};

export default function StepBookingInfo({
    data,
    updateData,
    isExistingClient,
    next,
    prev }: StepBookingInfoProps) {
    const [error, setError] = useState<string>('');

    const handleSubmit = () => {
        setError("");
        const result = isExistingClient
            ? bookingInfoSchemaExistingClient.safeParse({
                eventLocation: data.eventLocation,
                message: data.message,
            })
            : bookingInfoSchemaNewClient.safeParse({
                email: data.email,
                phone: data.phone,
                name: data.name,
                eventLocation: data.eventLocation,
                message: data.message,
            });

        if (!result.success) {
            setError(result.error.issues[0]?.message || "Invalid input");
            return;
        }

        if (!isExistingClient && data.phone) {
            const parsed = parsePhoneNumberFromString(data.phone);
            const formatted = parsed?.format('E.164');
            if (formatted) {
                updateData({ phone: formatted });
            }
        }


        next();
    };

    return (
        <div className="flex flex-col gap-4 px-6 pt-4">
            <h2 className="font-extrabold text-[35px] xl:text-[45px] text-center">Booking Details</h2>
            {isExistingClient && data.name && (
                <div className='text-left mb-2'>
                    <h3 className="text-[35px] xl:text-[45px] font-regular">
                        Welcome back
                    </h3>
                    <h3 className="text-[35px] xl:text-[45px] font-bold">
                        {data.name}!
                    </h3>
                </div>
            )}

            {!isExistingClient && (
                <>
                    <div>
                        <label className="text-[17px] xl:text-[20px] font-medium opacity-80 pl-2">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => updateData({ email: e.target.value })}
                            className="w-full bg-[#1d1d1d] text-white px-4 py-2 xl:px-5 xl:py-3 rounded-xl"
                        />
                    </div>

                    <div>
                        <label className="text-[17px] xl:text-[20px] font-medium opacity-80 pl-2">Phone Number</label>
                        <PhoneInput
                            international
                            defaultCountry="US"
                            value={data.phone}
                            countrySelectProps={{ native: false }}
                            onChange={(value: string | undefined) => {
                                updateData({ phone: value || '' });
                            }}
                            className="w-full bg-[#1d1d1d] text-white px-4 py-2 xl:px-5 xl:py-3 rounded-xl"
                        />
                    </div>

                    <div>
                        <label className="text-[17px] xl:text-[20px] font-medium opacity-80 pl-2">Full Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => updateData({ name: e.target.value })}
                            className="w-full bg-[#1d1d1d] text-white px-4 py-2 xl:px-5 xl:py-3 rounded-xl"
                        />
                    </div>
                </>
            )}

            <div>
                <label className="text-[17px] xl:text-[20px] font-medium opacity-80 pl-2">Event Location</label>
                <input
                    type="text"
                    value={data.eventLocation}
                    onChange={(e) => updateData({ eventLocation: e.target.value })}
                    className="w-full bg-[#1d1d1d] text-white px-4 py-2 xl:px-5 xl:py-3 rounded-xl"
                />
            </div>

            <div>
                <label className="text-[17px] xl:text-[20px] font-medium opacity-80 pl-2">Message (optional)</label>
                <textarea
                    value={data.message}
                    onChange={(e) => updateData({ message: e.target.value })}
                    className="w-full bg-[#1d1d1d] text-white px-4 py-2 xl:px-5 xl:py-3 rounded-xl resize-none"
                    rows={4}
                />
            </div>

            {error && <p className="text-red-400 text-sm xl:text-[16px] ">{error}</p>}

            <div className="flex flex-col mt-4 items-center">
                <button
                    onClick={handleSubmit}
                    className="bg-white xl:text-[30px] xl:h-13 text-black font-extrabold h-10 w-75 px-5 rounded-3xl hover:bg-[#1d1d1d] hover:text-white"
                >
                    Submit
                </button>

                <button
                    onClick={prev}
                    className="text-xs xl:text-[16px] opacity-60 hover:text-white pt-7 pb-2"
                >
                    Back
                </button>
            </div>
        </div>
    );
}