import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { z } from 'zod';
import type { BookingFormData } from '../../types/BookingFormData';

const bookingSchema = z.object({
    date: z.date(),
    time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format")
});

type StepSelectDateProps = {
    data: BookingFormData;
    updateData: (newData: Partial<BookingFormData>) => void;
    next: () => void;
};


export default function StepSelectDate({
    data,
    updateData,
    next,
}: StepSelectDateProps) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(data.date);
    const [selectedTime, setSeletedTime] = useState<string>(data.time || '');
    const [error, setError] = useState<string>('');

    const [loading] = useState(false);
    //will add more when we incorporate this client side with the dashboard side

    const canContinue = selectedDate && selectedTime;

    const handleNext = () => {
        setError('');

        if (!selectedDate || !selectedTime) {
            setError("Please select both date and time");
            return;
        }

        const result = bookingSchema.safeParse({
            date: selectedDate,
            time: selectedTime,
        });

        if (!result.success) {
            setError(result.error.issues[0]?.message || "Invalid input");
            return;
        }

        updateData({
            date: selectedDate,
            time: selectedTime
        });
        next();
    };

    return (
        <div className='flex flex-col w-full px-5 pt-2 gap-4 pb-4 '>
            <h2 className='font-extrabold text-[35px] xl:text-[45px] text-center tracking-wide'>Select a Date</h2>

            <div className='flex bg-[#1b1b1b] p-6 lg:p-10 justify-center rounded-3xl '>
                {loading ? (
                    <div className="flex items-center justify-center w-full h-75 xl:h-95">
            <span className="text-white text-lg">Loading calendar...</span>
          </div>
                ) : 
                (<DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}

                />)}
            </div>

            <div className='flex flex-row justify-between px-2 xl:px-5 items-center'>
                <div>
                    <label className="block mb-2 text-[17px] xl:text-[23px] font-extrabold">
                        Select Time
                    </label>
                    <input
                        type='time'
                        value={selectedTime}
                        onChange={(e) => setSeletedTime(e.target.value)}
                        className='w-full  xl:text-[20px] border px-3 py-2 bg-[#1d1d1d] text-white rounded-2xl'
                    />
                </div>



                {canContinue && (
                    <button
                        onClick={handleNext}
                        className=" bg-white xl:text-[30px] xl:h-13 text-black font-extrabold h-10 px-5 rounded-3xl hover:bg-[#1d1d1d] hover:text-white"
                    >
                        Next
                    </button>)}
            </div>

            {error && <p className="text-red-400 text-center text-[10px] font-medium">{error}</p>}
        </div>
    );
}