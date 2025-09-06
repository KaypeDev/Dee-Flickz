import { useState } from 'react';
import { z } from 'zod';
import type { BookingFormData } from '../../types/BookingFormData'
import { isValidPhoneNumber, parsePhoneNumberFromString} from 'libphonenumber-js';
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'

const clientSchema = z.object({
  email: z.email({ message: "Enter a valid email." }),
  phone: z
    .string()
    .refine((val) => isValidPhoneNumber(val || ''), {
      message: "Enter a valid phone number.",
    }),
});

type StepClientFindProps = {
  data: BookingFormData;
  updateData: (newData: Partial<BookingFormData>) => void;
  checkClientExists: (email: string, phone: string, setError: (msg: string) => void) => void;
  handleNewClient: () => void;
  prev: () => void;
};

export default function StepClientFind({
  data,
  updateData,
  checkClientExists,
  handleNewClient,
  prev,
}: StepClientFindProps) {
  const [error, setError] = useState("");


  const handleSubmit = () => {
    setError("");
    const result = clientSchema.safeParse({
      email: data.email,
      phone: data.phone,
    });

    if (!result.success) {
      setError(result.error.issues[0]?.message || "Invalid Input");
      return;
    }

    const parsed = parsePhoneNumberFromString(data.phone || '');
    const formattedPhone = parsed?.format('E.164') || '';

    checkClientExists(data.email, formattedPhone, setError)
  }

  return (
    <div className="flex flex-col gap-4 px-6 xl:px-8 pt-4">
      <h2 className="font-extrabold text-[35px] xl:text-[45px] text-center">Existing Client?</h2>

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
          className="w-full bg-[#1d1d1d] text-white px-4 py-2 xl:px-5 xl:py-3  rounded-xl"
        />
      </div>

      {error && <p className="text-red-400 text-sm xl:text-[16px] ">{error}</p>}

      <div className="flex flex-col mt-4 items-center">
        <button
          onClick={handleSubmit}
          className="bg-white xl:text-[30px] xl:h-13  text-black font-extrabold h-10 w-75 px-5 rounded-3xl hover:bg-[#1d1d1d] hover:text-white"
        >
          Continue
        </button>

        <button
          onClick={handleNewClient}
          className="text-[13px] xl:text-[16px] underline text-white opacity-60 hover:opacity-80 pt-5"
        >
          Or continue as new client
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